const ghpages = require('gh-pages');

ghpages.publish(
  'dist',
  {
    branch: 'master',
    repo: 'https://github.com/jchritton/jchritton.github.io.git'
  },
  e => {
    e
      ? console.log(e)
      : console.log('The production build has been successfully published!');
  }
);
