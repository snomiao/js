import { exec } from "child_process";
/**
 * @description Exec condition chain like in shell.
 *  Run command as child process and adapt stdio into main process, snorun('echo hello')
 *
 * @example
 * await snorun('command')
 *    && await snorun('echo succ')
 *    || await snorun(['echo', 'fail'])
 *
 * // as same as run in shell like this:
 * //    command && echo succ || echo 'fail'
 *
 * @param cmd if cmd is an array, it will be joined by spaces
 * @returns true if cmd's exit code=0, otherwise return false
 * @author: snomiao <snomiao@gmail.com>
 */
export default function snorun(
  cmd: string | string[],
  { echo = true, echoPrefix = "> ", pipe = true } = {},
) {
  const execCommand = [cmd].flat().join(" ");
  if (echo) console.log((echoPrefix || "") + execCommand);
  const { promise: ok, resolve: okr } = usePromise<boolean>();
  const { promise: code, resolve: coder } = usePromise<number>();
  const { promise: stdout, resolve: outr } = usePromise<string>();
  const { promise: stderr, resolve: errr } = usePromise<string>();
  // todo: keep colors
  const p = exec(execCommand, async (error, stdout, stderr) => {
    errr(stderr.trimEnd()), outr(stdout.trimEnd());
    error ? okr(false) : okr(true);
    coder(error?.code || 0);
  });
  if (pipe) p.stderr.pipe(process.stderr);
  if (pipe) p.stdout.pipe(process.stdout);
  // if (pipe) process.stdin.pipe(p.stdin);
  const subPromises = { ok, stdout, stderr, code };
  const retype = { ...ok, ...subPromises };
  return Object.assign(ok, subPromises) as typeof retype;
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
