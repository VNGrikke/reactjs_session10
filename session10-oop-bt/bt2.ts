class Student {
    id: number;
    age: number;
    email: string;
    constructor(id: number, age: number, email: string) {
        this.id = id;
        this.age = age;
        this.email = email;
    }
}
let students: Student[] = [];

students.push(new Student(1, 4, "Vu@gmail.com"));
students.push(new Student(2, 5, "Nam@gmail.com"));
students.push(new Student(3, 6, "Ha@gmail.com"));

students.forEach(student => {
    console.log(`ID: ${student.id}, Age: ${student.age}, Email: ${student.email}`);
});
