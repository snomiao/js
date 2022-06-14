@echo off
chcp 65001

rem quick launch if exists
invisible "cmd /c cd %1 && code.cmd -n ."

rem try git sync first, if it fails then create gh repo if not exists
echo if there is error, run gh auth login
cmd /c "cd %1 && git fetch && git pull" || ^
gh repo create %1 --public %2 -y || ^
gh repo create %1 --private %2 -y

rem then try git clone
rem > git config --get user.name 
@REM git config --global user.email "snomiao@gmail.com"
@REM git config --global user.name  "snomiao"
git clone git@github.com:snomiao/%1.git

rem open code
invisible "cmd /c cd %1 && code.cmd -n ."

rem git sync
cmd /c "cd %1 && git fetch && git pull"

rem invisible "cmd /c cd %1 && type requirements.txt && pip install -U -r requirements.txt || echo install requirements fail"
invisible "cmd /c cd %1 && pnpm i -y || pause"
