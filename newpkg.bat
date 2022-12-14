cd %~dp0
cd packages
mkdir %1
cd %1 || exit 0
cmd /c npm init -y

cmd /c mkdir src
touch README.md
touch src/index.ts
code src/index.ts
