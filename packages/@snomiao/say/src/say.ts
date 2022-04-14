import { default as say } from "say";

/**
 * use (say as any) because index.d.ts of say.js seems to be wrong
 */

const callbacker =
  <T>(resolve: { (result: T): void }, reject: { (err: string): void }) =>
    (err: string, result: T) =>
      err ? reject(err) : resolve(result);

export const speak = (
  text: string,
  voice?: string,
  speed?: number,
): Promise<void> =>
  new Promise(async (resolve, reject) =>
    (say as any).speak(text, voice, speed, callbacker<void>(resolve, reject)),
  );

export const stop = (): Promise<void> =>
  new Promise(async (resolve, reject) =>
    (say as any).stop(callbacker<void>(resolve, reject)),
  );

export const getInstalledVoices = (): Promise<string[]> =>
  new Promise(async (resolve, reject) =>
    (say as any).getInstalledVoices(callbacker<string[]>(resolve, reject)),
  );

export const exportFile = (
  text: string,
  voice?: string,
  speed?: number,
  filePath?: string,
): Promise<void> =>
  new Promise(async (resolve, reject) =>
    (say as any).export(
      text,
      voice,
      speed,
      filePath,
      callbacker<void>(resolve, reject),
    ),
  );
