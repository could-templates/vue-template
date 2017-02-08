'use strict';
const fs = require('fs');
const rimraf = require('rimraf');
const cleanCb = (dir) => () => {
  console.log(`目录${dir}已被清空\n`);
};

module.exports = (dirs) => {
  for (let i = 0; i < dirs.length; i ++) {
    rimraf(dirs[i], fs, cleanCb(dirs[i]));
  }
};

