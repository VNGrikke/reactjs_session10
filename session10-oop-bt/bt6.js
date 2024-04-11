"use strict";
class Song {
    constructor(id, name, length) {
        this.id = id;
        this._name = name;
        this._length = length;
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName;
    }
    get length() {
        return this._length;
    }
    set length(newLength) {
        this._length = newLength;
    }
}
let song1 = new Song(1, "em vừa tach python", "45 phút");
console.log(song1);
console.log(song1.name);
console.log(song1.length);
song1.name = "kiếp này coi như bỏ";
song1.length = "3 phút";
console.log(song1.name);
console.log(song1.length);
