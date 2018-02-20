# react-cli

![React](https://img.shields.io/badge/react-%5E16.2.0-brightgreen.svg)
![Redux](https://img.shields.io/badge/redux-%5E3.7.2-brightgreen.svg)
![webpack](https://img.shields.io/badge/webpack-%5E3.x.x-brightgreen.svg)
![MIT](https://img.shields.io/dub/l/vibe-d.svg?style=flat-square)

🛠️ CLI for rapid React.js development

## Features
 - **React 16.2.0**
 - **Redux 3.7.2**
 - **react-redux 5.0.6**, to bind React and Redux.
 - **react-router v4 **
 - **JSX**
 - **ES6**, support [`stage-1`](http://babeljs.io/docs/plugins/preset-stage-1/) and decorators by default.
 - **webpack 3.x**
 - **Webpack-dev-server**, the dev-server.
 - **Hot-Reload**, support both React and Redux!
 - **Proxy**
 - **Environmental value**
 - **ESlint**, with [`standard`](https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style) and [`standard-react`](https://github.com/feross/eslint-config-standard-react).
 - **Redux-devtools**, to make the stores more clear
 - **bundle-analyzer**
 - **jest** with Enzyme, to make unit test for react components easier.

## Usage

* **Git Init**

```shell
git clone ssh://git@
git submodule init
git submodule update
```

or

```shell
git clone --recursive ssh://git@
git submodule update
```

* **Development:**

```shell
npm start
```

* **Build:**

```shell
npm run build
```

* **Update Vendor:**

```shell
npm run dll
```

## Doc

It's pretty much the same config as [vue-cli/webpack](https://github.com/vuejs-templates/webpack/tree/master/docs). If you are familiar with `vue-cli`, you may have a great joy with this boilerplate. If you want to have a peek of the structure, you can visit [`full-features` branch](https://github.com/SidKwok/react-webpack-boilerplate/tree/full-features).

### Pre-Processor

You can take `less`, `sass`, or `stylus` as your CSS pre-processors, after installing the dependencies. For example, to use `less`:
```bash
npm install less less-loader --save-dev
```
Then, you can `import` your `less` files in your components.

### postcss-config

We use [postcss](http://postcss.org/) with autoprefixer by default. You can also use your own plugins in the project. For example, to use `postcss-color-gray` to "grayify" your color:
```bash
# First thing to do
npm install postcss-color-gray --save-dev
```

add your plugin in `postcssrc.js`
```javascript
module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {},
    // put your plugin here
    "postcss-color-gray": {}
  }
}
```

Tada! Everything is gray now.

### Proxy

We uses [http-proxy-middleware](https://github.com/chimurai/http-proxy-middleware)  for proxying.
For example, you want to proxy `/api/get-post` and `/api/get-id`, you can edit the option in `config/index.js`:
```javascript
...
dev: {
  proxyTable: {
    '/api': {
      target: 'http://example.org',
      changeOrigin: true
    }
  }
}
...
```
Then, you can proxy `/api` in your dev server. See more [options](https://github.com/chimurai/http-proxy-middleware#options).

### Env

This [doc](https://github.com/vuejs-templates/webpack/blob/master/docs/env.md) can illustrate the usage well.

### Hot-Reload

We use [react-hot-loader v3](https://github.com/gaearon/react-hot-loader/tree/next) to tweak React components, even for Redux! Have fun!

### ESlint

[standard](https://github.com/feross/standard) and [standard-react](https://github.com/feross/standard-react) are the default style guides for this boilerplate, feel free to edit your own config in `.eslintrc.js`.

### Router

You can use v3 or v4 as your router, and both of them support async router! We use [`react-imported-component`](https://github.com/theKashey/react-imported-component) to split router into several chunk. It's an awesome Higher-Order-Component! It can not only split router for react, but also every single component you have. It can even enable hot-reload for async components (noted that [`react-loadable`](https://github.com/thejameskyle/react-loadable) can't do that, and it is not designed to solve this issue)! Do whatever you want to make your app neat! If you like this component, please give author a star!

### Redux

You can use **Redux** in the project when you enable the choice. Noted that we separate two kinds of store(`dev` and `prod`) in two files. The `prod` one doesn't have any devtools' code, for reducing the size of bundle. If you need to apply the middlewares (`redux-thunk`, `redux-saga` and so on), you need to apply them in `middlewares.js`.

### redux-devtools

This boilerplate has enabled the `browser devtool` config for **Redux** automatically. To make it work, you need to download the [extension](https://github.com/zalmoxisus/redux-devtools-extension) for your browser.

You can also choose `Customized DevTools` that built in your page. With this you can customized your own devtool. Click [here](https://github.com/gaearon/redux-devtools) to see more options.

### Production

The production files built for server, so you are not supposed to visit `index.html` directly. To make it works, you may need a static server:
```bash
npm install -g serve # or others

# in `./dist`.
serve

# if you enable router
serve -s
```

We use [babel-plugin-transform-react-remove-prop-types](https://www.npmjs.com/package/babel-plugin-transform-react-remove-prop-types) to remove PropType from production bundle.

### bundle-analyzer

We analyze the bundle content with [webpack-bundle-analyzer](https://github.com/th0r/webpack-bundle-analyzer)
To get this out, please run:

```bash
npm run build --report
```

### Source Map

You can have a better experience on debugging with sourceMap in your development, but we disable it by default in production for others are not supposed to get your source code from the browser. It also can make your building process faster. Feel free to turn it on in `config/index.js: productionSourceMap`.

### Unit test with jest

We provide [jest](http://facebook.github.io/jest/) as the default unit test library for its powerful and convenient apis. We also use [Enzyme](http://airbnb.io/enzyme/index.html) as a helper to make components more testable. All test files should place in `./test/unit/__tests__`. And you need to create the files named `your-js(x)-file.test.js`, or it will not pass in jest. But you can set your own rules in `package.json`.

## Reference

* [vue-cli/webpack](https://github.com/vuejs-templates/webpack)
