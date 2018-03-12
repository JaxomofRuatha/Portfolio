const pug = require('pug');
const fs = require('fs');
const path = require('path');

fs.readFile('src/docs/project-list.json', 'utf8', (err, data) => {
  pug.renderFile(
    'src/view/index.pug',
    { pretty: true, debug: true, projectList: data },
    html => {
      fs.writeFile('./indexTEST.html', html, err => {
        if (err) throw err;
        console.log('The file has been saved!');
      });
    }
  );
});
