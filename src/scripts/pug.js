const pug = require('pug');
const fs = require('fs-extra');

// Change options for HTML output depending on environment

const envOpts =
  process.env.NODE_ENV === 'production' ? { pretty: false } : { pretty: true };
const envOutfile =
  process.env.NODE_ENV === 'production'
    ? './dist/index.html'
    : './public/index.html';

// Create a Pug render engine instance

const pugRenderer = pug.compileFile('src/view/index.pug', envOpts);

// Include JSON data as local variable, write HTML file to correct location

fs.readFile('src/view/viewdata.json', 'utf8', (err, data) => {
  const locals = { viewData: JSON.parse(data) };
  const html = pugRenderer(locals);

  fs.outputFile(envOutfile, html, err => {
    if (err) throw err;
    console.log('HTML file successfully created!');
  });
});
