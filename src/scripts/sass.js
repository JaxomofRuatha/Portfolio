const fs = require('fs-extra');
const sass = require('node-sass');
const postcss = require('postcss');
const uncss = require('uncss').postcssPlugin;
const cssnext = require('postcss-cssnext');
const cssnano = require('cssnano');

// node-sass options based on environment

const envOpts =
  process.env.NODE_ENV === 'production'
    ? {
        file: 'src/sass/style.scss',
        outFile: 'dist/css/style.css'
      }
    : {
        file: 'src/sass/style.scss',
        outFile: 'public/css/style.css',
        sourceMapEmbed: true
      };

// Location of CSS output based on environment

const envCssFile =
  process.env.NODE_ENV === 'production'
    ? 'dist/css/style.css'
    : 'public/css/style.css';

// Location of HTML file for UnCSS based on environment

const envHtmlFile =
  process.env.NODE_ENV === 'production'
    ? 'dist/index.html'
    : 'public/index.html';

// node-sass processor, outputs raw CSS file

const sassResult = new Promise((res, rej) => {
  sass.render(envOpts, (err, result) => {
    if (err) {
      rej(err);
    } else {
      res(result);
    }
  });
});

const uncssOpts = {
  html: [envHtmlFile]
};

const cssnanoOpts = {
  preset: 'default'
};

// PostCSS plugins based on environment

const envPlugins =
  process.env.NODE_ENV === 'production'
    ? [uncss(uncssOpts), cssnext, cssnano(cssnanoOpts)]
    : [uncss(uncssOpts), cssnext];

// PostCSS processing of CSS output from node-sass

sassResult.then(result => {
  postcss(envPlugins)
    .process(result.css, {
      from: envCssFile,
      to: envCssFile
    })
    .then(processedCss => {
      fs.outputFile(envCssFile, processedCss, 'utf8', err => {
        err
          ? console.error(err)
          : console.log('CSS file successfully created!');
      });
    })
    .catch(err => {
      console.error(err);
    });
});
