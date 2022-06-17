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
  const { promise, resolve } = usePromise<boolean>();
  const p = exec(execCommand, (error, stdout, stderr) => (error ? resolve(false) : resolve(true)));
  process.stdin.pipe(p.stdin);
  // todo: keep colors
  p.stdout.pipe(process.stdout);
  p.stderr.pipe(process.stderr);
  return promise;
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
