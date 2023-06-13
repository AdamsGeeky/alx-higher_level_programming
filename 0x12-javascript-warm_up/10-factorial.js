#!/usr/bin/node

const process = require('process');
const arg1 = parseInt(process.argv[2]);
function mul (a) {
  if (a === 1) {
    return (1);
  } else {
    return (a * mul(a - 1));
  }
}
if (isNaN(arg1)) {
  console.log(1);
} else {
  const ans = mul(arg1);
  console.log(ans);
}
