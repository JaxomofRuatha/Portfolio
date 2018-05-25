const fs = require('fs-extra');

// Copy asset files to a directory based on environment
// TODO: Optimize assets for production and device type

const envOutfile =
  process.env.NODE_ENV === 'production' ? './dist' : './public';

fs
  .copy('./src/assets', envOutfile)
  .then(() => {
    console.log('Assets successfully added!');
  })
  .catch(err => {
    console.error(err);
  });
