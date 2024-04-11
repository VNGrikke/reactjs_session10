"use strict";
class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }
    get Width() {
        return this._width;
    }
    set Width(width) {
        this._width = width;
    }
    get Height() {
        return this._height;
    }
    set Height(height) {
        this._height = height;
    }
    area() {
        return this._width * this._height;
    }
    circumference() {
        return 2 * (this._width + this._height);
    }
}
const rectangular = new Rectangle(5, 10);
console.log(rectangular.Height);
console.log(rectangular.Width);
console.log(rectangular.circumference());
console.log(rectangular.area());
console.log("*********************");
rectangular.Width = 4;
rectangular.Height = 8;
console.log(rectangular.Height);
console.log(rectangular.Width);
console.log(rectangular.circumference());
console.log(rectangular.area());
