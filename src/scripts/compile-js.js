const fs = require('fs-extra');
const browserify = require('browserify');

// Browserify options based on environment

const envOpts =
  process.env.NODE_ENV === 'production'
    ? {}
    : {
        debug: true
      };

// Output filepath of bundled JS

const envOutfile =
  process.env.NODE_ENV === 'production'
    ? 'dist/js/bundle.js'
    : 'public/js/bundle.js';

// Browserify instance

const bundler = browserify('src/js/index.js', envOpts);

// Babel transform as default

bundler.transform('babelify', { presets: ['env'] });

// Uglify transform only for production environment

if (process.env.NODE_ENV === 'production') {
  bundler.transform('uglifyify');
}

// Bundle and output JS file content

bundler.bundle((err, jsBundle) => {
  fs.outputFile(envOutfile, jsBundle, 'utf8', err => {
    err ? console.error(err) : console.log('JS file successfully created!');
  });
});
