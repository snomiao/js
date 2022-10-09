
// style (part) description
// docs (part) description
// fix (part) description
// feat (part) description
// breaking (part) description
export const cmds = ["fix", 'style', 'feat', 'breaking', 'docs'] as const;
type CMD = typeof cmds[number]
type PART = '-' | '.' | string
const cmdActions: Record<CMD, (part: PART, desc: string) => Promise<void> | void> = {
    breaking: () => null,
    docs: () => null,
    feat: () => null,
    fix: () => null,
    style: () => null
}
export default function snocommit(cmd: CMD, part: PART, desc: string) {
    cmdActions[cmd]
}