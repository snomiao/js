export function $$(selector: string, element = document) {
  return [...element.querySelectorAll(selector)] as HTMLElement[];
}

/**
 * @deprecated
 */
export function patternSelectorGenerate(element: HTMLElement, { deep = Infinity }) {
  const tag = element.tagName.toLowerCase();
  const role = element.role ? `[role="${element.role}"]` : "";
  const i = element as HTMLInputElement;
  const type = i.type ? `[type="${i.type}"]` : "";
  const base = `${tag}${role}${type}`;
  const parentElement = element.parentElement;
  if (!parentElement) return base;
  const children = [...parentElement.children];
  const nth = children.findIndex((v) => element === v) + 1;
  const nthl = children.length - nth + 1;
  if (!nth) return base;
  const thisSelector = `${base}:nth-child(${nth}):nth-last-child(${nthl})`;
  if (!deep) return thisSelector;
  const parentSelector = patternSelectorGenerate(parentElement, { deep: deep - 1 });
  return `${parentSelector}>${thisSelector}`;
}
