#!/usr/bin/node

const request = require('request');

const ID = process.argv[2];
const url = `https://swapi.dev/api/films/${ID}/`;
let characters = [];

request(url, (err, response, body) => {
  if (err) {
    console.log(err);
    return;
  }

  const data = JSON.parse(body);
  characters = data.characters;
  charGet(0);
});

function charGet (index) {
  if (index === characters.length) {
    return;
  }

  request(characters[index], (err, response, body) => {
    if (err) {
      console.log(err);
      return;
    }
    const oneChar = JSON.parse(body);
    console.log(oneChar.name);
    charGet(index + 1);
  });
}
