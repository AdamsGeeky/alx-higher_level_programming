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
}
module.exports = Rectangle;
