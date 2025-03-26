# Windows installer exe.

Installing process uses [Inno](https://jrsoftware.org/isinfo.php) as a tool of creating the setup executable. It encapsulates the `aion.exe` files into `Aion_Setup.exe` file, which manages the installation process on the user file system, as well as ensures the target path of installation is included in PATH variables, to use `aion` executable from any place of the command. 

`setup.iss` file is entry point of Inno, which uses `install_script.ps1`. Using Inno, you can run `setup.iss` to get installer created

> The target `.exe` file should be located in `exe/executables/win/aion.exe`, before executing

To prepare the execution process, you should run:

`npm run make-win` - it creates an raw executable.

Then you run `iscc exe/win-installer/setup.iss`, and output `Aion-Setup.exe` file is located in `exe/win-installer/dist/Aion-Setup.exe`

Alternatively, you can run `npm run build-win-installer`. 

In case any errors appear during the compilation, consult internet sources. 




