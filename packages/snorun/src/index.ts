import { exec } from "child_process";
/**
 * @description Exec condition chain like in shell.
 *  Run command as child process and adapt stdio into main process, snorun('echo hello')
 *
 * @example
 * await snorun('command')
 *    && await snorun('echo succ')
 *    || await snorun('echo fail')
 *
 * // as same as run in shell like this:
 * //    command && echo succ || echo 'fail'
 *
 * @param cmd if cmd is an array, it will be joined by spaces
 * @returns true if cmd's exit code=0, otherwise return false
 * @author: snomiao <snomiao@gmail.com>
 */
export default function snorun(cmd: string | string[], { echo = true, echoPrefix = "> " } = {}) {
  const execCommand = [cmd].flat().join(" ");
  if (echo) console.log((echoPrefix || "") + execCommand);
  const { promise: succPromise, resolve: succ } = usePromise<boolean>();
  const { promise: stdout, resolve: out } = usePromise<string>();
  const { promise: stderr, resolve: err } = usePromise<string>();
  // todo: keep colors
  const p = exec(execCommand, (error, stdout, stderr) => {
    error ? succ(false) : succ(true);
    err(stderr.trimEnd());
    out(stdout.trimEnd());
  });
  p.stderr.pipe(process.stderr);
  p.stdout.pipe(process.stdout);
  // fix env without stdin
  // process.stdin.read && process.stdin.pipe(p.stdin);
  process.stdin;
  console.log("done");
  return { ...succPromise, stdout, stderr };
}
function usePromise<T>() {
  const s: any = {};
  s.promise = new Promise((resolve, reject) => Object.assign(s, { resolve, reject }));
  return s as {
    promise: Promise<T>;
    resolve: (value: T) => void;
    reject: (reason?: any) => void;
  };
}
