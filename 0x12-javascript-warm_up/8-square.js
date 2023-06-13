#!/usr/bin/node

const process = require('process');
const arg1 = parseInt(process.argv[2]);
let i = 0;
if (isNaN(arg1)) {
  console.log('Missing size');
} else {
  while (i < arg1) {
    let str = '';
    let j = 0;
    while (j < arg1) {
      str += 'X';
      j++;
    }
    console.log(str);
    i++;
  }
}
