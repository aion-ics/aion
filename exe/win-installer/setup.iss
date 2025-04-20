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
LicenseFile=..\..\LICENCE
SetupIconFile=.\assets\aionsmall.ico

[Files]
Source: "..\executables\win\aion.exe"; DestDir: "{app}"; Flags: ignoreversion
Source: "install_script.ps1"; DestDir: "{tmp}"; Flags: deleteafterinstall


[Registry]
Root: HKLM; Subkey: "SYSTEM\CurrentControlSet\Control\Session Manager\Environment"; ValueType: expandsz; ValueName: "Path"; ValueData: "{olddata};{app}"; Check: NeedsAddPath(ExpandConstant('{app}'))

[Code]
function NeedsAddPath(Param: string): boolean;
var
  OrigPath: string;
begin
  if not RegQueryStringValue(HKEY_LOCAL_MACHINE,
    'SYSTEM\CurrentControlSet\Control\Session Manager\Environment',
    'Path', OrigPath)
  then begin
    Result := True;
    exit;
  end;
  
  // Look for the path with ';' added to prevent partial matches
  Result := Pos(';' + Param + ';', ';' + OrigPath + ';') = 0;
end;

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
