# JS Logic Loket Assignment
![Build Success](https://img.shields.io/shippable/5444c5ecb904a4b21567b0ff.svg) [![Angular6](https://img.shields.io/badge/build-angular6-green.svg)](https://angular.io) [![LazyLoad](https://img.shields.io/badge/lazyload-success-green.svg)](https://angular.io)

This project built for Loket recruitment assignment using Angular 6, and Angular-CLI 6.1. This project using Karma and Jasmine as unit testing, lazy-load design pattern, AoT compilation, shared modules/components to be reusable and reactive programming. Optimization after running build production using Gulp, rendering gzip file to compress more file size, optimize image size, GZIP enabled.
### [Live Demo](https://swloket.triadiprabowo.com)

### Project Requirements
* `Node JS version > 8.9`
* `NPM version > 5.6`

### Update NodeJS to Latest (Linux)
```
sudo apt-get remove nodejs && sudo apt-get remove npm
sudo rm -rf /usr/local/bin/npm /usr/local/share/man/man1/node* /usr/local/lib/dtrace/node.d ~/.npm ~/.node-gyp /opt/local/bin/node /opt/local/include/node /opt/local/lib/node_modules 
sudo rm -rf /usr/local/lib/node*
sudo rm -rf /usr/local/include/node*
sudo rm -rf /usr/local/bin/node*
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
sudo apt-get install -y nodejs
ln -s /usr/bin/node /usr/local/bin/node 
```

### Commands Available
* `npm start` - Start dev server
* `npm test` - Start unit test using karma and jasmine
* `npm run webpack:server` - Build server config file (to run sever after build)
* `npm run optimize` - Postbuild optimization because angular-cli doesn't give webpack config unless we do `ng eject`
* `npm run build` - Build project in development environment
* `npm run build:prod` Build project in production environment (compiling server and optimization enabled)

Below commands are usable if `npm run build:prod` has been succesfully executed:
* `npm start:server` - Start production server (with node environment)
* `npm start:forever` - Start production server (with pm2 environment)
* `npm stop:forever` - Stop production server (with pm2 environment)

### How-To Setup Project for First Time
* Run `npm install` - to fresh install node modules
* Run `npm install -D @angular-devkit/build-angular` - to update current angular devkit to support build project in production environment

### Run Locally
* Run `npm start` - starting local server in localhost port 4000

### Build in production environment
* Run `npm run build:prod` - build angular project in production environment