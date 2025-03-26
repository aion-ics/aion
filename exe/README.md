# Folder purpose

This folder will contain all the executable files of `Aion` in subfolder `/executables`. 

To create the executables for all the plaforms, run 
```
npm run build-executables
```

To create executable for each of the platform, run `npm run make-platform`, where `platform` is one of the `mac`,  `win`, `linux`.

The target executable will be located in eponymous subfolders of `executables/`

Also, `win-installer/` contains necessary instructions and util files for creating a windows installer. 



