class Vehicle2{
    public name:string;
    readonly id: number;
    private year:number;
    protected company:string;
    constructor(name:string,id:number,year:number,company:string){
        this.name = name;
        this.id = id;
        this.year = year;
        this.company = company
    }
    showInfor():void{
        console.log(`id: ${this.id}`);
        console.log(`tên: ${this.name}`);
        console.log(`năm sản xuất: ${this.year}`);
        console.log(`hãng: ${this.company}`);
    }
}

let v3 = new Vehicle2("Lamborghini Urus",1,2023,"Lamborghini");
v3.showInfor();
