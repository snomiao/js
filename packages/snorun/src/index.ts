import { exec, execSync } from "child_process";
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
 * @returns true if cmd's exit code=0, otherwise return false
 * @author: snomiao <snomiao@gmail.com>
 */
export default function snorun(cmd: string, { echo = false } = {}) {
  const { promise, resolve } = usePromise();
  if (echo) console.log(cmd);
  const p = exec(cmd, (error, stdout, stderr) => (error ? resolve(false) : resolve(true)));
  p.stdout.pipe(process.stdout);
  p.stderr.pipe(process.stderr);
  process.stdin.pipe(p.stdin);
  return promise;
}
export function snorunSync(cmd: string) {
  execSync(cmd);
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
