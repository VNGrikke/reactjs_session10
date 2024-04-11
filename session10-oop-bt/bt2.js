"use strict";
class Student {
    constructor(id, age, email) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students = [];
students.push(new Student(1, 4, "Vu@gmail.com"));
students.push(new Student(2, 5, "Nam@gmail.com"));
students.push(new Student(3, 6, "Ha@gmail.com"));
students.forEach(student => {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});
