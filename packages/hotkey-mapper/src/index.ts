import { mapObjIndexed } from "rambda";
type handler = (e: KeyboardEvent) => void;

export default function hotkeyMapper<K extends keyof GlobalEventHandlersEventMap>(
  mapping: Record<string, handler>,
  on: K = "keydown" as K,
  options?: boolean | AddEventListenerOptions,
) {
  const handler = (event: KeyboardEvent) => {
    const key = event.key.toLowerCase();
    const code = event.code.toLowerCase();
    const simp = code.replace(/^(?:Key|Digit|Numpad)/, "");
    event[`${key}Key`] = true;
    event[`${code}Key`] = true;
    event[`${simp}Key`] = true;
    const mods = "meta+alt+shift+ctrl";
    mapObjIndexed((fn: handler, hotkey: string) => {
      const conds = `${mods}+${hotkey.toLowerCase()}`
        .replace(/win|command|search/, "meta")
        .replace(/control/, "ctrl")
        .split("+")
        .map((k, i) => [k, Boolean(i >= 4) === Boolean(event[`${k}Key`])]);
      if (!Object.entries(Object.fromEntries(conds)).every(([, ok]) => ok)) return;
      event.stopPropagation(), event.preventDefault();
      return fn(event);
    }, mapping);
  };
  window.addEventListener(on, handler, options);
  return function unload() {
    window.removeEventListener(on, handler, options);
  };
}
export function hotkeyUp(hotkey: string, options?: boolean | AddEventListenerOptions) {
  return new Promise<void>((r) => {
    const unload = hotkeyMapper({ [hotkey]: () => r(unload()) }, "keyup", options);
  });
}
