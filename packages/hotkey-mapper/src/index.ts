import { mapObjIndexed } from "rambda";
type handler = (e: KeyboardEvent) => void;

export default function hotkeyMapper(mapping: Record<string, handler>) {
  const handlers = mapObjIndexed(hotkeyHandler, mapping);
  mapObjIndexed((handler) => window.addEventListener("keydown", handler), handlers);
  return function unload() {
    return mapObjIndexed((handler) => window.removeEventListener("keydown", handler), handlers);
  };
  function hotkeyHandler(fn: handler, hotkey: string) {
    return (e: KeyboardEvent) => {
      e[`${e.key}Key`] = true;
      const mods = "meta+alt+shift+ctrl";
      const conds = `${mods}+${hotkey}`
        .replace(/win|command|search/, "meta")
        .replace(/control/, "ctrl")
        .split("+")
        .map((k, i) => [k, Boolean(i >= 4) === Boolean(e[`${k}Key`])]);
      const covered = Object.entries(Object.fromEntries(conds));
      const matched = covered.every(([keyName, pass]) => pass);
      if (!matched) return;
      e.stopPropagation();
      e.preventDefault();
      // console.log(hotkey, 'actived')
      return fn(e);
    };
  }
}
