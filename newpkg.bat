cd %~dp0
cd packages
mkdir %1
cd %1 || exit 0
npm init -y
code src/index.ts
