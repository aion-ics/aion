[Setup]
AppName=Aion
AppVersion=1.0
AppPublisher=Aion inc
DefaultDirName={autopf}\Aion
DefaultGroupName=Aion
OutputDir=.\dist
OutputBaseFilename=Aion-Setup
Compression=lzma
SolidCompression=yes
ArchitecturesAllowed=x64
ArchitecturesInstallIn64BitMode=x64
PrivilegesRequired=admin

SetupIconFile=.\assets\aionsmall.ico

[Files]
Source: "..\executables\win\aion.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "install_script.ps1"; DestDir: "{tmp}"; Flags: deleteafterinstall

[Run]
Filename: "powershell.exe"; \
Parameters: "-ExecutionPolicy Bypass -File ""{tmp}\install_script.ps1"""; \
Flags: runhidden waituntilterminated

[UninstallRun]
Filename: "powershell.exe"; \
Parameters: "$path = [Environment]::GetEnvironmentVariable('PATH', 'Machine'); \
    $path = $path.Replace(';{app}', ''); \
    [Environment]::SetEnvironmentVariable('PATH', $path, 'Machine')"

[Icons]
Name: "{group}\Aion CLI"; Filename: "{app}\aion.exe"; IconFilename: "{app}\aion.exe"
Name: "{group}\Uninstall Aion"; Filename: "{uninstallexe}"
Name: "{commondesktop}\Aion CLI"; Filename: "{app}\aion.exe"; IconFilename: "{app}\aion.exe"
