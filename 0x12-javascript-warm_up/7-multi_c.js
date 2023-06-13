#!/usr/bin/node

const process = require('process');
const arg1 = parseInt(process.argv[2]);
let i = 0;
if (isNaN(arg1)) {
  console.log('Missing number of occurrences');
} else {
  while (i < arg1) {
    console.log('C is fun');
    i++;
  }
}
