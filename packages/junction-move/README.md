# junction-move

Move a folder to new location and make a Juction link to new location. Only works with windows yet. 

## Usage

```
Usage: npx junction-move from_folder to_folder
Example: npx junction-move C:\Go D:\Go
```

## Implementation

With Two commands

```
robocopy %from_path% %to_path% /MOVE /e
mklink /J %from_path% %to_path%
```

## License

ISC