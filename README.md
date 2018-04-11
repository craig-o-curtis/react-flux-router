Demo project from Cory House's 2015 React Flux Course
/* prepare for deprecation! */

From Scratch Project Setup:
// package.json & README
$ npm init
$ touch README.md
$ touch .gitignore && echo "node_modules/" >> .gitignore
$ git init
$ mkdir src dist
$ touch src/index.html

// Gulp - task runner
$ npm install -g gulp
$ npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0
$ touch gulpfile.js // dig into file for configuration

// Browserify - JS bundler
// Reactify - compiles JSX
// Vinyl Source Stream - 
$ npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0

// Bootstrap & jQuery
$ npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0
    // added in gulp and top of main.js

// ES Lint
$ touch eslint.config.json
$ npm install --save gulp-eslint@0.15.0


