#!/usr/bin/node
const fs = require('fs');

const firstFile = process.argv[2];
const secondFile = process.argv[3];
const thirdFile = process.argv[4];

if (
  fs.existsSync(firstFile) &&
    fs.statSync(firstFile).isFile &&
    fs.existsSync(secondFile) &&
    fs.statSync(secondFile).isFile &&
    thirdFile !== undefined
) {
  const firstthirdFileontent = fs.readFileSync(firstFile);
  const secondthirdFileontent = fs.readFileSync(secondFile);
  const stream = fs.createWriteStream(thirdFile);

  stream.write(firstthirdFileontent);
  stream.write(secondthirdFileontent);
  stream.end();
}
