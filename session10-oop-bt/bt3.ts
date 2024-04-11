class Employee{
    public name:string
    protected company:string
    private phone:string

    constructor(name:string,company:string,phone:string) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }

    printlnInfo(){
        console.log(this.name);
        console.log(this.company);
        console.log(this.phone);
    }
}

let v1 = new Employee("Vuong","PTIT","01234578")
v1.printlnInfo();