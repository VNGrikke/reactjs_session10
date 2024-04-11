class Song {
    public readonly id: number;
    private _name: string;
    private _length: string;

    constructor(id: number, name: string, length: string) {
        this.id = id;
        this._name = name;
        this._length = length;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get length(): string {
        return this._length;
    }

    set length(newLength: string) {
        this._length = newLength;
    }
}

let song1 = new Song(1,"em vừa tach python","45 phút")
console.log(song1);
console.log(song1.name);
console.log(song1.length);
song1.name = "kiếp này coi như bỏ"
song1.length = "3 phút"
console.log(song1.name);
console.log(song1.length);


