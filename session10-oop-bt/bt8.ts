class Rectangle {
    private _width: number;
    private _height: number;

    constructor(width: number, height: number) {
        this._width = width;
        this._height = height;
    }

    get Width(): number {
        return this._width;
    }

    set Width(width: number){
        this._width = width;
    }

    get Height(): number {
        return this._height;
    }

    set Height(height: number){
        this._height = height;
    }

    area(): number {
        return this._width * this._height;
    }

    circumference(): number {
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
