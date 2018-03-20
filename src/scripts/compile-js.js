const fs = require('fs');
const browserify = require('browserify');

const bOpts = {
  debug: true
};

browserify('src/js/index.js', bOpts)
  .transform('babelify', { presets: ['env'] })
  .transform('uglifyify')
  .bundle((err, jsBundle) => {
    fs.writeFile('public/js/bundle.js', jsBundle, 'utf8', err => {
      err ? console.error(err) : console.log('JS file successfully bundled!');
    });
  });
