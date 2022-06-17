# junction-move

Move a folder to new location and make a Juction link to new location. Only works with windows yet.

## Usage

```batch
Usage: npx junction-move from_folder to_folder
Example: npx junction-move C:\Go D:\Go
```

## Implementation

With Two commands

```
robocopy %from_path% %to_path% /MOVE /e
mklink /J %from_path% %to_path%
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
