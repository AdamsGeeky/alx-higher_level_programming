#!/usr/bin/node
/**
 * class Rectangle that defines a rectangle:
 */

class Rectangle {
  constructor (w, h) {
    if (typeof (w) === 'number' && typeof (h) === 'number' && w > 0 && h > 0) {
      this.width = w;
      this.height = h;
    }
  }

  print () {
    for (let i = 0; i < this.height; i++) {
      let shape = '';
      for (let j = 0; j < this.width; j++) {
        shape += 'X';
      }
      console.log(shape);
    }
  }
}
module.exports = Rectangle;
