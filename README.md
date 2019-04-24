## About

This is for testing out npm packages that will eventually be loaded client side.

It will:
- **Transpile in babel** with @babel/preset-env" setting
- **Package with webpack** with default settings
- **Serve up the ./dist folder** with [http-server](https://www.npmjs.com/package/http-server)

## Requires

node 5.2 and up (needs npx)

## Installation

```shell
npm i
```

## Build & serve

```shell
npm run build && npm run start
```

Terminal will provide the URL that can be used to access files in browser.