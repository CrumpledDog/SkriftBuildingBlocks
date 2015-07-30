cd ../../BuildingBlocks.Site
call npm install
cd ../BuildTools/MsBuild
Call nuget.exe restore ..\..\BuildingBlocks.sln
Call "%programfiles(x86)%\MSBuild\12.0\Bin\MsBuild.exe"   ..\..\BuildingBlocks.sln %~1
@IF %ERRORLEVEL% NEQ 0 GOTO err

cd ../../BuildingBlocks.Site
call grunt

cd ../BuildTools/MsBuild

@EXIT /B 0
:err
@EXIT /B 1