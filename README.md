# Steps To Intialize Angular 4 Sample App

## Initialize npm
Generate "package.json" file after entering defaults

```
npm init
```

## Install minimum required libraries

```
npm install --save @angular/core @angular/common @angular/compiler @angular/platform-browser @angular/platform-browser-dynamic @angular/forms @angular/router @angular/http rxjs zone.js core-js
```

## Install typescript

```
npm install --save-dev typescript tslint @types/node
npm install -g typescript
```

## Install Webpack, Webpack-dev-server and other required plugins

```
npm install --save-dev webpack webpack-dev-server html-webpack-plugin extract-text-webpack-plugin raw-loader css-loader style-loader sass-loader node-sass url-loader file-loader awesome-typescript-loader angular2-template-loader
```

## Initialize Type Script Config

```
tsc --init
```

## Add buil step to package.json in sripts section

```
"build": "webpack-dev-server --config webpack/webpack.config.js"
```

## Run local dev

```
npm run build
```

## Install karma and jasmine for unit test purposes

```
npm install --save-dev karma jasmine @types/jasmine karma-jasmine karma-cli
```

## Initalize karma

```
karma init
```

## Install karma webpack

```
npm install --save-dev karma-webpack karma-sourcemap-loader
```

