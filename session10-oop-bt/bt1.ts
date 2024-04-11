class Vehicle{
    name:string;
    year:number;
    company:string;
    constructor(name:string,year:number,company:string){
        this.name = name;
        this.year = year;
        this.company = company
    }
    showInfor():void{
        console.log(`tên: ${this.name}`);
        console.log(`năm sản xuất: ${this.year}`);
        console.log(`hãng: ${this.company}`);
    }
}

let x1 = new Vehicle("Porsche 911",2023,"Porsche");
x1.showInfor();
let x2 = new Vehicle("Lamborghini Urus",2023,"Lamborghini");
x2.showInfor();
