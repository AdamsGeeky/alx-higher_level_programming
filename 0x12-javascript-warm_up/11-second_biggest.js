#!/usr/bin/node
const process = require('process');
const all = process.argv;
if (all.length < 4) {
  console.log(0);
} else {
  const a = [];
  for (let i = 2; parseInt(all[i]); i++) {
    a.push(parseInt(all[i]));
  }
  a.sort((a, b) => a - b);
  a.reverse();
  console.log(a[1]);
}
