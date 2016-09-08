# What is this?
This is a starter kit for `AngularJS 1.5.x` & `ES6` application.

# Installation and usage
## Prerequisites

Make sure you have globally installed latest versions of [NodeJS](https://nodejs.org):
* Node 4+
* NPM 3+

Make sure you have globally installed latest versions of such NPM modules:
* Gulp 4
* webpack

## Install
Run `npm install` to download all dependencies

## Usage - Development
Run `npm run serve` to start watcher and local server. Follow console messages.

In case of error, make sure you have latest version of Gulp installed


## Usage - Production
Run `npm run build` to compile and minify all files. Find them in `/dist` folder.

# AngularJS 1.x & ES6 & Module bundler (Webpack):

In this section we'll described some specific techniques using the combination
of `AngularJS 1.x` and `ES6` and `Webpack (or any other module bundler)`

## Templates

### importing html file and inserting inline
```js
import template from './footer.html'

let myComponent = {
    template: template
}
```

in this case template will be paste HTML inline. To make [Webpack][wp] import `html` files we've added a
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


## Modules
### External modules

```js
import ngAnimate from 'angular-animate'   // variant 1
import 'angular-ui-router'                // variant 2

angular.module('myApp', [ngAnimate, 'ui.router'])
```

Using **variant 2** you'll need to know the exact name of the imported module (e.g.`ui.router`)
to include it as a dependency to your application.
**variant 1** doesn't need that, you may use a variable here.

**variant 1** is recommended

### Internal modules

`child-module.js`:

```js
export const childModule = 'childModule';

angular.module(childModule, [])
```

`parent-module.js`:

```js
import {childModule} from './child-module';

angular.module('myApp', [ childModule ])
```


## Bootstrap

We will be using [UI Bootstrap][ui.bt] from AngularUI Team.
This module requires **Bootstrap CSS**. Here're several ways to get it:

#### 1. [bootstrap-loader](https://github.com/shakacode/bootstrap-loader)

This variant seems most legit in combination with Webpack, but current
version requires Bootstrap's JS files and jQuery. We don't need those since
we are planning to use **UI Bootstrap**

#### 2. import Bootstrap CSS

This can be the simplest way to get Bootstrap styling:

```js
import 'bootstrap/dist/css/bootstrap.css' // will get styles directly from node_modules
```

#### 3. import Bootstrap SASS

This variant is **recommended** and will be used.

Here's a [file](src/assets/bootstrap/_bootstrap.scss) where we import all
Bootstrap modules separately. This gives us more flexibility like overwriting
variables or create custom theming based on existing layouts. (e.g. [file](src/assets/bootstrap/_overwrites.scss))

## CSS Modules
[Link](https://github.com/css-modules/css-modules)

After applying **CSS Modules** all styles will come modularized by default.
And we don't need it because of several reasons:

* some AngularJS modules come with predefined global styles and modularization
of which can just disable them

* it's easier to have some styles globally.
e.g. we don't want to have all Bootstrap's classes as a module, like this:

```html
<div ng-class="styles['col-md-6']"></div>
```

but only module specific classes, like this:

```html
<div class=col-md-6 ng-class="styles.myModuleClass"></div>
```

To achieve this result we should somehow distinguish style files that should
be applied globally and modular. Here's how it can be done using **Webpack**:
```js
loaders: [
    ...,
    // Global styles
    {
        test: /\.(css|scss)$/,
        loaders: ['style','css','sass','postcss']
    },
    // CSS modules
    {
        test: /\.(mcss)$/, // .module.scss / mod.scss
        loaders: [
            'style',
            'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass','postcss'
        ]
    },
```

## File structure / Component architecture

https://github.com/toddmotto/angular-styleguide



[wp]: https://webpack.github.io/
[ui.bt]: https://angular-ui.github.io/bootstrap/
