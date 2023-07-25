#!/usr/bin/node

const request = require('request');
const url = process.argv[2];
let count = 0;
request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
  } else {
    const all = JSON.parse(body).results;
    for (let i = 0; i < all.length; i++) {
      const char = all[i].characters;
      for (let j = 0; j < char.length; j++) {
        if (char[j].includes('18')) {
          count++;
        }
      }
    }
    console.log(count);
  }
});
