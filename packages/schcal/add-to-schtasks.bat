@echo off
chcp 65001
title UPDATING SCHTASKS
cd %~dp0
echo current dir %~dp0
echo myself      %0

cd %~dp0
npx schcal > schcal.log
schtasks /Create /tn SSAC /sc daily /st 17:00 /tr %0 /F


REM 
REM test by manual please or this will fall in infinite loop...
REM 
REM schtasks /Run /tn SSAC
