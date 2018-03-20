const sass = require('node-sass');
const postcss = require('postcss');
const eyeglass = require('eyeglass');
const fs = require('fs');
const uncss = require('uncss').postcssPlugin;
const cssnext = require('postcss-cssnext');

const sassResult = new Promise((res, rej) => {
  sass.render(
    eyeglass({
      file: 'src/sass/style.scss',
      outFile: 'public/css/style.css',
      precision: 10,
      sourceMap: true,
      sourceMapEmbed: true
    }),
    (err, result) => {
      if (err) {
        rej(err);
      } else {
        res(result);
      }
    }
  );
});

const uncssOpts = {
  html: ['public/index.html']
};

sassResult.then(result => {
  postcss([uncss(uncssOpts), cssnext])
    .process(result.css, {
      from: 'public/css/style.css',
      to: 'public/css/style.css'
    })
    .then(processedCss => {
      fs.writeFile('public/css/style.css', processedCss, 'utf8', err => {
        err
          ? console.error(err)
          : console.log('CSS file successfully processed!');
      });
    })
    .catch(err => {
      console.error(err);
    });
});
