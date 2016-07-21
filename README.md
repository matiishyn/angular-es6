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

# Used techniques:

## Templates
### 1. using absolute path to html file
```js
let myComponent = {
    templateUrl: 'app/components/myComponent/myComponent.html'
}
```

in this case the `buld` task will place all templates into `$templateCache`

### 2. importing html file and inserting inline
```js
import template from './footer.html'

let myComponent = {
    template: template
}
```

in this case template will be paste HTML inline. To make `webpack` import `html` files we've added a 
[`html-loader`](https://github.com/webpack/html-loader). And here's how Webpack's
configuration would look like:
```js
module: {
    loaders: [
        // ...
        {
            test: /\.html$/,
            loader: "html"
        },
        // ...
```

---

A recommendation is to use second variant. If you are sure that first variant is not used anywhere then
you may also remove Gulp's `partials` task in order to get rid of unused templates.
