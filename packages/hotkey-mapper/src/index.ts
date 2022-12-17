import { mapValues } from "lodash-es";

export default function hotkeyMapper(mapping: Record<string, () => void>) {
  const handlers = mapValues(mapping, hotkeyHandler);
  mapValues(handlers, (handler) => window.addEventListener("keydown", handler));
  return function unload() {
    return mapValues(handlers, (handler) => window.removeEventListener("keydown", handler));
  };
  function hotkeyHandler(fn: () => void, hotkey: string) {
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
      return fn();
    };
  }
}
