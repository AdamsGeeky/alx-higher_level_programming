#!/usr/bin/node

const process = require('process');
const arg1 = process.argv[2];
const arg2 = process.argv[3];

function add (a, b) {
  if (isNaN(parseInt(a)) || isNaN(parseInt(b))) {
    console.log(NaN);
  } else {
    console.log(parseInt(a) + parseInt(b));
  }
}
add(arg1, arg2);
