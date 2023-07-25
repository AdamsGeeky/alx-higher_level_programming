#!/usr/bin/node

const request = require('request');
const Id = process.argv[2];
const url = `https://swapi.dev/api/films/${Id}/`;

request.get(url, (err, response, body) => {
  if (err) {
    console.log(err);
  }
  const characters = JSON.parse(body).characters;
  for (const character of characters) {
    request(character, (error, response, body) => {
      if (error) {
        console.log(error);
        return;
      }
      const characterData = JSON.parse(body);
      console.log(characterData.name);
    });
  }
});
