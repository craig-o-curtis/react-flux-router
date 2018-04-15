Demo project from Cory House's 2015 React Flux Course
/* prepare for deprecation! */

Start the project
```bash
$ mkdir react-flux-router && cd react-flux-router
$ git clone https://github.com/craig-o-curtis/react-flux-router.git
$ npm install
$ gulp
```
// open localhost:9005

From Scratch Project Setup:
// package.json & README
```bash
$ npm init
$ touch README.md
$ touch .gitignore && echo "node_modules/" >> .gitignore
$ git init
$ mkdir src dist
$ touch src/index.html
```

// Gulp - task runner
```bash
$ npm install -g gulp
$ npm install --save gulp@3.9.0 gulp-connect@2.2.0 gulp-open@1.0.0
$ touch gulpfile.js // dig into file for configuration
```

// Browserify - JS bundler
// Reactify - compiles JSX
// Vinyl Source Stream - 
```bash
$ npm install --save browserify@11.0.1 reactify@1.1.1 vinyl-source-stream@1.1.0
```

// Bootstrap & jQuery
```bash
$ npm install --save bootstrap@3.3.5 jquery@2.1.4 gulp-concat@2.6.0
    // added in gulp and top of main.js
```

// ES Lint
```bash
$ touch eslint.config.json
$ npm install --save gulp-eslint@0.15.0
```

// React, React Router, Flux
```bash
$ npm install --save react@0.13.3 react-router@0.13.3 flux@2.0.3
```

