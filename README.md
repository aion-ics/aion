<p align="center">
  <img src="docs/img/huge_logo.png" alt="Logo">
</p>

# The Aion language

> [!CAUTION]
> The language is under development, and doesn't yet works.


Aion is DSL language for managing ICalendar(.ics) files. The official page of Aion language can be found at https://aion-ics.github.io/. 

## Resources

- **Executables**: https://aion-ics.github.io/downloads.html
- **Documentaion**: https://aion-ics.github.io/documentation.html 
- **Repository**: https://github.com/aion-ics/aion
## Using Aion

This repository contains all the necessary tools for and executing `Aion` source files in different ways (clone and run `npm i` before using it).

- `npm run cli` - this npm command will start the execution of `cli.ts` file. This is the entry point of the compiler. In case you want to compile and exectute an `.aion` file, you pass it as argument. E.g: `npm run cli main.aion`

- You can build the executables for your system. For that, you need two commands: `npm run build`, which will compile all the TypeScript files into JS in `/dist` directory, and then run the command `npm run make-%platform`, where `platform` is either `mac`, `win`, `linux`. OR you can build all the executables (why?) using command `npm run build-executables`. All the executables created will be available at `dist/exectuables` folder.

- Finally, you can use a simplyfied `Aion` compiler right in your web-framework. Run `npm i aion-ics`, and then simply import this in ES or CommonJS in your web app. 

> All the executables, but not necessary the most recent ones, are avaliable at https://aion-ics.github.io/ 

## Source code organization

The Aion language repository is organized in following way:


| Directory         | Contents                                                           |
| -                 | -                                                                  |
| `src/`           | the root directory of source files |
| `src/cli.ts`            | command line interface entry point                         |
| `src/index/ts`        | npm package entry points with functions exports                                           |
| `docs/examples/`        | some examples of `Aion` files                                      |
| `docs/`            | contains `/examples` and grammar in BNF form                                             |
| `exe/`            | contains `/executables` and win-installer build instructions                                            |


## Language grammar

The grammar of the language in Backus Naur Form (BNF) is avaliable in [docs folder](docs\grammar_BNF.md)

## Examples of Aion 

Further examples, and the full documentation is avaliable at Aion [website](https://aion-ics.github.io/). 