"use strict";
class Circle {
    constructor(radius) {
        this._radius = radius;
    }
    get radius() {
        return this._radius;
    }
    set radius(newRadius) {
        this._radius = newRadius;
    }
    areaCalculation() {
        return Math.PI * this._radius ** 2;
    }
    circumference() {
        return 2 * Math.PI * this._radius;
    }
}
let circle1 = new Circle(5);
console.log(circle1.radius);
console.log(circle1.circumference());
console.log(circle1.areaCalculation());
circle1.radius = 4;
console.log("***********************");
console.log(circle1.radius);
console.log(circle1.circumference());
console.log(circle1.areaCalculation());
