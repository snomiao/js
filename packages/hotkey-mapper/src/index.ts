import { mapObjIndexed } from "rambda";
type handler = (e: KeyboardEvent) => void;

export default function hotkeyMapper(mapping: Record<string, handler>, on = "keydown") {
  const handler = (event: KeyboardEvent) => {
    const mainKey = `${event.code.replace(/^Key/, "").toLowerCase()}Key`;
    event[mainKey] = true;
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
  window.addEventListener(on, handler);
  return function unload() {
    window.removeEventListener(on, handler);
  };
}
export function hotkeyUp(hotkey: string) {
  return new Promise<void>((r) => {
    const unload = hotkeyMapper({ [hotkey]: () => r(unload()) }, "keyup");
  });
}
