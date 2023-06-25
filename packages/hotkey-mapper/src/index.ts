import { mapObjIndexed } from "rambda";
type handler = (e: KeyboardEvent) => void;
/**
 * @reference view js keycode here: https://www.toptal.com/developers/keycode
 * @example
 * hotkeyMapper(
 *   {
 *     "alt+1": () => openLinkByCount(2 ** 1),
 *     "alt+2": () => openLinkByCount(2 ** 2),
 *     "alt+3": () => openLinkByCount(2 ** 3),
 *     "shift+alt+1": () => tryCopyLinkByCount(2 ** 1),
 *     "shift+alt+2": () => tryCopyLinkByCount(2 ** 2),
 *     "shift+alt+3": () => tryCopyLinkByCount(2 ** 3),
 *   },
 *   {capture: true}
 * )
 */
export default function hotkeyMapper<K extends keyof GlobalEventHandlersEventMap>(
  mapping: Record<string, handler>,
  options?: AddEventListenerOptions & { on?: K; target?: EventTarget },
) {
  const handler = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    const code = event.code.toLowerCase();
    const simp = event.code.replace(/^(?:Key|Digit|Numpad)/, "").toLowerCase();
    const map = new Proxy(event, {
      get: (target, p: string) =>
        Boolean(
          {
            [`${key}Key`]: true,
            [`${code}Key`]: true,
            [`${simp}Key`]: true,
          }[p] ?? (target as any)[p],
        ),
    }) as unknown as Record<keyof KeyboardEvent, boolean>;
    const mods = "meta+alt+shift+ctrl";
    mapObjIndexed((fn: handler, hotkey: string) => {
      const conds = `${mods}+${hotkey.toLowerCase()}`
        .replace(/win|command|search/, "meta")
        .replace(/control/, "ctrl")
        .split("+")
        .map((key) => key.toLowerCase().trim())
        .map((k, i) => [k, i >= 4 === (map as any)[`${k}Key`]]);
      if (!Object.entries(Object.fromEntries(conds)).every(([, ok]) => ok)) return;
      event.stopPropagation();
      event.preventDefault();
      return fn(event);
    }, mapping);
  };
  const target = options.target ?? globalThis;
  target.addEventListener(options?.on ?? "keydown", handler, options);
  return function unload() {
    target.removeEventListener(options?.on ?? "keydown", handler, options);
  };
}
export function hotkeyDown(hotkey: string, options?: AddEventListenerOptions) {
  return new Promise<void>((r) =>
    hotkeyMapper({ [hotkey]: () => r() }, { once: true, ...options, on: "keydown" }),
  );
}
export function hotkeyUp(hotkey: string, options?: AddEventListenerOptions) {
  return new Promise<void>((r) =>
    hotkeyMapper({ [hotkey]: () => r() }, { once: true, ...options, on: "keyup" }),
  );
}
