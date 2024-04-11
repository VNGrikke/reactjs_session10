class Circle {
    private _radius: number;

    constructor(radius: number) {
        this._radius = radius;
    }

    get radius(): number {
        return this._radius;
    }

    set radius(newRadius: number) {
        this._radius = newRadius;
    }

    areaCalculation(): number {
        return Math.PI * this._radius ** 2;
    }

    circumference(): number {
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
