# angular-es6

## todo
### 1. Load Bootstrap styles
Currently we have `import 'bootstrap/dist/css/bootstrap.css'`

Try to use [bootstrap-loader](https://github.com/shakacode/bootstrap-loader).
Currently this module requires `jquery` which is not good.


## Prerequisites

Make sure you have globally installed latest versions of [NodeJS](https://nodejs.org):
* Node 4+
* NPM 3+

Make sure you have globally installed latest versions of such NPM modules:
* Gulp 4
* webpack

Run `npm install` to download all dependencies

## Development
Run `npm run serve` to start watcher and local server. Follow console messages.

In case of error, make sure you have latest version of Gulp installed


## Production
Run `npm run build` to compile and minify all files. Find them in `/dist` folder.