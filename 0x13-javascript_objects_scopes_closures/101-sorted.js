#!/usr/bin/node
/**
 *  script that imports a dictionary of occurrences
 * by user id and computes a dictionary of user ids by occurrence
 */

const obj = require('./101-data.js').obj;

const newObj = {};

Object.getOwnPropertyNames(obj).forEach(occurences => {
  if (newObj[obj[occurences]] === undefined) {
    newObj[obj[occurences]] = [occurences];
  } else {
    newObj[obj[occurences]].push(occurences);
  }
});
console.log(newObj);
