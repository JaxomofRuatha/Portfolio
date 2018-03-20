const pug = require('pug');
const fs = require('fs');
const path = require('path');

const pugRenderer = pug.compileFile('src/view/index.pug', {
  pretty: true
});

fs.readFile('src/view/viewdata.json', 'utf8', (err, data) => {
  const locals = { viewData: JSON.parse(data) };
  const html = pugRenderer(locals);

  fs.writeFile('./public/index.html', html, err => {
    if (err) throw err;
    console.log('The HTML file has been saved!');
  });
});
