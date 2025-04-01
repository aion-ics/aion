<div align="center">
<img src="docs/img/huge_logo.png" alt="Logo">
</div>

# The Aion language

> [!CAUTION]
> The language is under development, and doesn't yet works.


Aion is DSL language for managing ICalendar(.ics) files. The official page of Aion language can be found at https://aionlang.github.io/. 

This repository contains all the necessary tools for and executing `Aion` source files in different ways (clone and run `npm i` before using it).


## Resources

- **Executables**: https://aion-ics.github.io/downloads.html
- **Documentaion**: https://aionlang.github.io/documentation.html 
- **Repository**: https://github.com/aionlang/aion
## Using Aion

**OPTION 1:** As npm library

You can install the latest version of Aion for use in Node-js environments using the command:

```
npm install aion-ics
```
**OPTION 2:** Run CLI from this repository

1) Clone the repository

```bash
git clone https://github.com/aionlang/aion
```

2) Go to directory and install dependencies (make sure you have Node.js installed). Then, to compile and run an .aion file, you run

```bash
npm run cli aion_file.aion
```

**OPTION 3:** Create executables from this repository. 

You can build Aion language directly from this repository, following these instructions:

```bash
npm run make-win
# or
npm run make-platform
# or
npm run make-platform
```

The target executable is located at `exe/executables/{platformname}`

**OPTION 4:** Build the installer

You can build the installer using Inno setup script. For more information, visit `exe/win-installer` folder with build [instructions](exe/win-installer/README.md)


**OPTION 5:** Install Aion using `Aion-setup.exe`

(coming soon) 

## Source code organization

The Aion language repository is organized in following way:


| Directory         | Contents                                                           |
| -                 | -                                                                  |
| `src/`           | the root directory of source files |
| `src/cli/`            | command line interface entry point folder                       |
| `src/index/`        | npm package entry point folder                                          |
| `docs/examples/`        | some examples of `Aion` files                                      |
| `docs/`            | contains `/examples` and grammar in BNF form                                             |
| `exe/`            | contains `/executables` and win-installer build instructions                                            |


## Language grammar

The grammar of the language in Backus Naur Form (BNF) is avaliable in [docs folder](docs/grammar_BNF.md)

## Examples of Aion 

Further examples, and the full documentation is avaliable at Aion [website](https://aion-ics.github.io/). 
