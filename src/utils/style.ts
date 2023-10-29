import { Padding } from "@/types/style";

export function cssvar(name: `--${string}`) {
  return `var(${name})`;
}

export function getPaddingStyle(padding: Padding) {
  if (typeof padding === "number") {
    return `${padding}px`;
  }

  const { x, y, top, bottom, left, right } = padding;
  const paddingTop = `${top ?? y ?? 0}px`;
  const paddingRight = `${right ?? x ?? 0}px`;
  const paddingBottom = `${bottom ?? y ?? 0}px`;
  const paddingLeft = `${left ?? x ?? 0}px`;

  return `${paddingTop} ${paddingRight} ${paddingBottom} ${paddingLeft}`;
}
