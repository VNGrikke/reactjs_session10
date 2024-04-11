"use strict";
class Vehicle2 {
    constructor(name, id, year, company) {
        this.name = name;
        this.id = id;
        this.year = year;
        this.company = company;
    }
    showInfor() {
        console.log(`id: ${this.id}`);
        console.log(`tên: ${this.name}`);
        console.log(`năm sản xuất: ${this.year}`);
        console.log(`hãng: ${this.company}`);
    }
}
let v3 = new Vehicle2("Lamborghini Urus", 1, 2023, "Lamborghini");
v3.showInfor();
