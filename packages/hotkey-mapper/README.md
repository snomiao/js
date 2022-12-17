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


## About

### License

GPLv3 - [The GNU General Public License v3.0 - GNU Project - Free Software Foundation](https://www.gnu.org/licenses/gpl-3.0.en.html)

### Author

Author: snomiao <snomiao@gmail.com>
Website: [snomiao.com](https://snomiao.com)

### Sponsors

- None yet.

Claim your sponsorship by donating snomiao <[Email: snomiao@gmail.com](mailto:snomiao@gmail.com)>

### Contribute

The main repo is in [here](https://github.com/snomiao/js#readme), any issue and PR's welcome.
