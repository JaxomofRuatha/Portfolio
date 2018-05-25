const ghpages = require('gh-pages');

// Publish the 'dist' build folder to the root GitHub URL repository for GH-Pages

ghpages.publish(
  'dist',
  {
    branch: 'master',
    repo: 'https://github.com/jchritton/jchritton.github.io.git',
    message: 'Automatically generated commit'
  },
  e => {
    e
      ? console.log(e)
      : console.log('The production build has been successfully published!');
  }
);
