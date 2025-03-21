<p align="center">
  <img src="docs/img/huge_logo.png" alt="Logo">
</p>

# The Aion language



Aion is DSL language for managing .ics files.  


> [!CAUTION]
> The language is under development, and doesn't yet works.

Version 1.0.0

## Using Aion

The easiest way to get started with Aion is to dowload the executable files for your system. Otherwise, you can configure running of Aion from this repository, following the instructions:

1) Clone the repository, using `git clone`
2) Install Node.js environment.
3) `cd aion`
4) Run `npm start run ` with argument - the `.aion` source file, some of which you can take from `/examples` folder.

## Source code organization

The Aion language repository is organized in following way:


| Directory         | Contents                                                           |
| -                 | -                                                                  |
| `src/`           | the root directory of source files |
| `src/cli.ts`            | command line interface entry point                         |
| `src/index/ts`        | npm package entry points with functions exports                                           |
| `docs/examples/`        | some examples of `Aion` files                                      |
| `docs/`            | contains `/examples` and grammar in BNF form                                             |

## Language grammar

The grammar of the language in Backus Naur Form (BNF) is avaliable in [docs folder](docs\grammar_BNF.md)

## Examples of Aion 

Further examples, and the full documentation is avaliable at Aion [website](https://aion-ics.github.io/). 