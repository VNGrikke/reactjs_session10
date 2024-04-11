"use strict";
class Department {
    constructor(id, name, employees) {
        this.id = id;
        this.name = name;
        this.employees = employees;
    }
    describe() {
        console.log(this.id);
        console.log(this.name);
    }
}
let department = new Department(1, "phong ke toan", ["vuong", "vu"]);
department.describe();
