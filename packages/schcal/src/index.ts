/* eslint-disable max-len */
import { exec } from "child_process";
import { csvParseRows } from "d3";
import { existsSync } from "fs";
import { readFile } from "fs/promises";
import { CalendarComponent } from "ical";
import sanitize from "sanitize-filename-truncate";
import sha1 from "sha1";
import { snof } from "snofa";
import snorun from "snorun";
import { promisify } from "util";
import yaml from "yaml";
import commandWrapperFileCreate from "./commandWrapperFileCreate";
import icalObjectFetch from "./icalObjectFetch";

export async function newSchtasksImport(
  schtasksCreationObjects: Awaited<ReturnType<typeof generateSchtasksCreationObjects>>,
) {
  const schtasksCreationCommands = schtasksCreationObjects.map(
    ({ schtasksCommand }) => schtasksCommand,
  );
  const creactionErrors = await runSchtasksCommands(schtasksCreationCommands);
  if (creactionErrors.length) {
    console.error("creactionErrors: ", creactionErrors);
    process.exit(1);
  }
  console.log(`${schtasksCreationCommands.length} sch-tasks added.`);
}

export async function outdatedSchtasksClean(config: Awaited<ReturnType<typeof readConfig>>) {
  // await exec('chcp 65001'); // run below command in utf8 encoding
  const csv = csvParseRows(await snorun("schtasks /query /fo csv /nh", { pipe: false }).stdout);
  const ssacTaskNames = csv
    .map(([taskPath]) => taskPath.slice(1))
    .filter((e) => e)
    .filter((e) => e.startsWith(config.SSAC_PREFIX));
  const schtasksDeletionCommands = ssacTaskNames.map(
    (taskName) => `schtasks /Delete /tn ${getSafeCommandParamString(taskName)} /F`,
  );
  // console.log(schtasksDeletionCommands)
  const deletionErrors = await runSchtasksCommands(schtasksDeletionCommands);
  if (deletionErrors.length) {
    console.error("deletionErrors: ", deletionErrors);
    process.exit(1);
  }
  console.log(`${schtasksDeletionCommands.length} old sch-tasks cleaned.`);
}

export async function readConfig(argv: {
  config: string;
  CACHE_TIMEOUT: number;
  HTTP_PROXY: string;
  FORWARD_DAYS: number;
  ICS_URLS: string | string[];
  _: (number | string)[];
}) {
  const configYAMLs = await Promise.all(
    [
      argv.config,
      process.env.CONFIG,
      "config.yaml",
      `${process.env.USERPROFILE}/.schcal/config.yaml`,
    ]
      .reverse()
      .filter(existsSync)
      .map(async (configPath) => yaml.parse(await readFile(configPath, "utf-8"))),
  );
  const y = configYAMLs.reduce((a, b) => ({ ...a, ...b }), {});
  const config = {
    HTTP_PROXY: (y.HTTP_PROXY as string) ?? "",
    SSAC_PREFIX: (y.SSAC_PREFIX as string) ?? "SSAC-",
    FORWARD_DAYS: (y.FORWARD_DAYS as number) ?? 7,
    CACHE_TIMEOUT: (y.CACHE_TIMEOUT as number) ?? 0,
    // ...process.env,
    // ...configFromYAMLs,
    // ...argv,
    ICS_URLS: [y.ICS_URLS, argv.ICS_URLS, argv._?.map(String)].flat().filter((e) => e),
  };
  process.env.HTTP_PROXY ||= config.HTTP_PROXY;
  return config;
}

async function runSchtasksCommands(schtasksCommands: string[]) {
  // await exec('chcp 65001'); // run below command in utf8 encoding
  const exec_outputs = await Promise.all(
    schtasksCommands.map(async (schtasksCommand) => ({
      schtasksCommand,
      ...(await promisify(exec)(schtasksCommand)),
    })),
  );
  const outputsWithStderr = exec_outputs.filter(({ stderr }) => stderr);
  // console.log('errors', outputsWithStderr)
  return outputsWithStderr;
}

export async function generateSchtasksCreationObjects({
  ICS_URLS,
  FORWARD_DAYS,
  SSAC_PREFIX,
}: {
  ICS_URLS: string[];
  FORWARD_DAYS: number;
  SSAC_PREFIX: string;
}) {
  //   const { ICS_URLS, HTTP_PROXY, CACHE_TIMEOUT, FORWARD_DAYS, SSAC_PREFIX } = config;
  if (!ICS_URLS?.length) {
    console.error(
      "CONFIG ERROR... ICS_URLS is empty, " +
        "maybe you should write a config file or put a ics URL as a param...\n" +
        "More infomation can be found in https://github.com/snomiao/schtasks-calendar",
    );
    process.exit(1);
  }
  const actions = await fetchCalendarsEventsActions(ICS_URLS, FORWARD_DAYS);
  return (
    await Promise.all(
      actions.map(async ({ taskName, startDateString, endDateString, commandOrURL }) => {
        // console.log({ startDateString, endDateString, commandOrURL });
        const schtasksObject = await getSchtasksObject(
          taskName,
          startDateString,
          endDateString,
          commandOrURL,
          SSAC_PREFIX,
        );
        // console.log(schtasksObject);
        return schtasksObject;
      }),
    )
  )
    .sort((a, b) => a.schtasksName.localeCompare(b.schtasksName))
    .map((e) => (console.log(e.schtasksName), e));
}

// [Exe文件开机启动，隐藏运行窗口运行_问道-CSDN博客_开机隐藏运行exe]( https://blog.csdn.net/llag_haveboy/article/details/84675145 )
// `wscript.createObject("wscript.shell").Run("cmd.exe /C C:\gz\gz.exe", 0, TRUE)`
async function getSchtasksObject(
  taskName: string,
  startDateString: string,
  endDateString: string,
  commandOrURL: string,
  SSAC_PREFIX: string,
) {
  const S = DateTimeAssembly(new Date(startDateString));
  const E = DateTimeAssembly(new Date(endDateString));
  // const dateParams = `/SC ONCE /SD ${S.D} /ST ${S.T} /ED ${E.D} /ET ${E.T} /Z`; // the option ONCE does not support /ED (and /Z)
  // const dateParams = `/SC ONCE /SD ${S.D} /ST ${S.T} /ET ${E.T} /Z`; // /ET is used to repeat tasks and runs every 10 minutes if there is a /ET.
  // const dateParams = `/SC ONCE /SD ${S.D} /ST ${S.T} /Z`; // ERROR: Need End Boundary
  // const dateParams = `/SC DAILY /SD ${S.D} /ST ${S.T} /ED ${E.D} /ET ${E.T} /Z`; // OK
  const dateParams = `/SC ONCE /SD ${S.D} /ST ${S.T}`; // OK BUT will not delete task after complete..

  // [schtasks | Microsoft Docs]( https://docs.microsoft.com/en-us/windows-server/administration/windows-commands/schtasks )
  const taskStartDate = new Date(startDateString);
  const taskStartDateShortString = new Date(
    +new Date(startDateString) - new Date().getTimezoneOffset() * 60e3,
  )
    .toISOString()
    .replace(/[^\dT]/g, "")
    .replace("T", "-")
    .slice(4, 8 + 4 + 1);
  const taskID = `${taskStartDate.toISOString()}-${commandOrURL}`;
  const taskHash = sha1(taskID);
  const schtasksName = `${SSAC_PREFIX}${taskStartDateShortString}-${taskName}`;
  // console.log(schtasksName);
  // TODO FIXME: 貌似普通指令没有静默成功……
  //
  // defaults to use a wrapper
  // const slientlyRunCommandRaw = isUrl(commandOrURL) ? 'explorer ' + `"${escapeCommand(commandOrURL)}"` : 'CMD /c start "SSAC" "' + escapeCommand(commandOrURL) + '"'
  // const slientlyRunCommand = (slientlyRunCommandRaw.length <= 250) ? slientlyRunCommandRaw : await mkCommandWrapperFile(taskHash, slientlyRunCommandRaw)
  //
  // 全部使用wrapper
  const slientlyRunCommand = await commandWrapperFileCreate(taskHash, commandOrURL);
  //
  const safeTaskname = getSafeCommandParamString(
    sanitize(schtasksName.slice(0, 200)).replace(/[<>\/\\:~%"']/g, "-"),
  );
  const safeTR = getSafeCommandParamString(slientlyRunCommand);
  const taskParams = `/TN ${safeTaskname} /TR ${safeTR}`;
  // console.log(taskParams);
  const schtasksCommand = `schtasks /Create /F ${dateParams} ${taskParams}`;
  // ref: [windows - How do you schedule a task (using schtasks.exe) to run once and delete itself? - Super User]( https://superuser.com/questions/1038528/how-do-you-schedule-a-task-using-schtasks-exe-to-run-once-and-delete-itself )
  return { schtasksName, schtasksCommand };
  // function escapeCommand(cmd) {
  //   return cmd.replace(/&/g, "^&").replace(/%/g, "%%");
  // }
}
function getSafeCommandParamString(串: string) {
  return `"${串.replace(/"/g, '\\"')}"`;
}
function DateTimeAssembly(date: Date) {
  const [, 年, 月, 日, 时, 分, 秒, 毫秒] = new Date(+date - new Date().getTimezoneOffset() * 60e3)
    .toISOString()
    .match(/(....)-(..)-(..)T(..):(..):(..)\.(...)Z/);

  return {
    D_Locale: date.toLocaleDateString(),
    T_Locale: date.toLocaleTimeString(),
    D: [年, 月, 日].join("/"),
    T: [时, 分, 秒].join(":"),
  };
}

async function fetchCalendarsEventsActions(ics_urls: string[], FORWARD_DAYS: number) {
  return (
    await Promise.all(
      ics_urls.map(async (ics_url) => await fetchCalendarEventsActions(ics_url, FORWARD_DAYS)),
    )
  ).flat(1);
}

async function fetchCalendarEventsActions(ics_url: string, FORWARD_DAYS: number) {
  const icalObject = await icalObjectFetch(ics_url);
  const actions = Object.values(icalObject)
    .map((vEvent) => {
      if (vEvent.type !== "VEVENT") return;
      // vEvent
      const [rangeStart, rangeEnd] = [+new Date(), +new Date() + FORWARD_DAYS * 86400e3]; // FORWARD_DAYS days from now
      const events = getRangeEvents(vEvent, rangeStart, rangeEnd);
      const actions = snof(events, function getEventsActions(events) {
        return events
          .flatMap(function getEventActions(event) {
            const { start, end, summary, description } = event;
            const action =
              null ||
              snof(event, function runCommandMatch(event) {
                // BEWARE the description can be plain text OR HTML but what we just want want a plain text.
                const description = innerText(event?.description || ""); // ASSUME THE HTML IS GOOD AT FORMAT
                // description.match('share') && console.debug(description);
                const summary = event?.summary;
                //
                const matchedContent =
                  null ||
                  summary?.match(/^启动\s+([\s\S]*)/im) ||
                  description?.match(/^启动\s+([\s\S]*)/im) ||
                  summary?.match(/^RUN\s+(.*)/im) ||
                  description?.match(/^RUN\s+(.*)/im);
                return (
                  matchedContent &&
                  (() => {
                    return { commandOrURL: matchedContent[1], taskName: "" };
                  })()
                );
              }) ||
              snof(event, function linkMatch(event) {
                // BEWARE the description can be plain text OR HTML but what we just want want a plain text.
                const description = innerText(event?.description || ""); // ASSUME THE HTML IS GOOD AT FORMAT
                const summary = event?.summary;
                // markdown style
                const matchedContent =
                  summary?.match(/\[\s*(.*?)\s*?\]\(\s*(.*?)\s*?\)/) ||
                  description?.match(/\[\s*(.*?)\s*?\]\(\s*(.*?)\s*?\)/) ||
                  summary?.match(
                    /(.*)((?:https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])/,
                  ) ||
                  description?.match(
                    /(.*)((?:https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|])/,
                  );

                return (
                  matchedContent &&
                  (() => {
                    const [, 标题, 链接] = matchedContent;
                    return { commandOrURL: 链接, taskName: 标题 };
                  })()
                );
              });
            return (
              action && [
                {
                  startDateString: start.toLocaleString(),
                  endDateString: end.toLocaleString(),
                  ...action,
                  taskName: action.taskName || summary,
                },
              ]
            );
          })
          .filter((e) => e);
      });
      return actions;
    })
    .filter((e) => e)
    .flat(1);
  return actions;
}

function getRangeEvents(
  vEvent: CalendarComponent,
  rangeStart: number | Date,
  rangeEnd: number | Date,
) {
  const { summary, description, start, end, rrule, recurrences, exdate } = vEvent;
  // Calculate the duration of the event for use with recurring 事件.
  const duration = +end - +start;
  // avoid error
  // const _recurrences = recurrences || [];
  // const _exdate = exdate || [];
  // exdate == [ '2020-03-05': 2020-03-05T09:30:00.000Z { tz: 'Asia/Hong_Kong' } ]
  const exdatesKeys = Object.keys(exdate); // datestr or undefined
  // exdatesKeys == [ '2020-03-05' ]
  const recurrencesKeys = Object.keys(recurrences?.map((e) => e.exdate)); // datestr or undefined
  // recurrencesKeys == [ '2020-03-05' ]
  //
  // First determine a fuzzy range date here,
  //  and then filter after calculating the precise beginning and end time
  const dates = [start]
    // join rules dates
    .concat(rrule?.between(new Date(rangeStart), new Date(rangeEnd)) || [])
    // exlude dates
    .filter((date) => !exdatesKeys.includes(date.toISOString().slice(0, 10)))
    // override recurrences
    .filter((date) => !recurrencesKeys.includes(date.toISOString().slice(0, 10)));
  // TODO: fix this
  // .concat(Object.values(_recurrences).map(({ start }) => start));
  // summary == '背词' && console.debug('dates', dates);
  return (
    dates
      .map((date) => {
        // TODO: fixme
        // if (recurrences?.[date.toISOString().slice(0, 10)]) {
        //   const { start, end, summary, description } = vEvent;
        //   return { start, end, summary, description };
        // }
        const start = date;
        const end = new Date(+start + duration);
        return { start, end, summary, description };
      })
      .filter((e) => e)
      // Filter the dates...
      .filter(({ start, end }) => +rangeStart < +end && +rangeStart < +start && +start < +rangeEnd)
  );
}

function innerText(s: string) {
  return unescapeHTML(s.replace(/<br.*?>/g, "\n").replace(/\<.*?\>/g, ""));
}
function unescapeHTML(unsafe: string) {
  return unsafe
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'");
}
