#!/usr/bin/node
/**
 * Square that defines a square
 * and inherits from Square of 5-square.js:
 */
const Square1 = require('./5-square');

class Square extends Square1 {
  charPrint (c) {
    const Shape = c === undefined ? 'X' : c;
    for (let i = 0; i < this.height; i++) {
      let shape = '';
      for (let j = 0; j < this.width; j++) {
        shape += Shape;
      }
      console.log(shape);
    }
  }
}

module.exports = Square;
