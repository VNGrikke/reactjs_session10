"use strict";
class Employee {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printlnInfo() {
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}
let v1 = new Employee("Vuong", "PTIT", "01234578");
v1.printlnInfo();
