# EightBittr
[![Build Status](https://travis-ci.org/FullScreenShenanigans/EightBittr.svg?branch=master)](https://travis-ci.org/FullScreenShenanigans/EightBittr)
[![NPM version](https://badge.fury.io/js/eightbittr.svg)](http://badge.fury.io/js/eightbittr)

An abstract class used exclusively as the parent of GameStartr.
EightBittr contains useful functions for manipulating Things that are independent of the required GameStartr modules.


## Build Process

EightBittr uses [Gulp](http://gruntjs.com/) to automate building, which requires [Node.js](http://node.js.org).

To build from scratch, install NodeJS and run the following commands:

```
npm install
gulp
```

### Individual Gulp tasks

* `gulp tsc` - Runs the [TypeScript](https://typescriptlang.org/) compiler.
* `gulp tslint` - Runs [TSLint](https://github.com/palantir/tslint).
* `gulp test` - Runs tests in `tests/`. 