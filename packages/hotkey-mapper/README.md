# Hotkey-mapper

a simply frontend hotkey-mapper

## Usage

```typescript
import hotkeyMapper from 'hotkey-mapper'
const unloadHotkeyMaps = hotkeyMapper({
    "alt+i": () => console.log('init-task'),
    "alt+t": () => console.log('tag'),
    "alt+n": () => console.log('next-task'),
    "alt+u": () => console.log('user'),
    "ctrl+alt+c": () => console.log('code-action'),
});
await new Promise(r => setTimeout(r, 60e3)) // wait 1 min
unloadHotkeyMaps()
```

