import { Category } from "./category";

export class Product {
    public id:string;
    public pname:string;
    public price:number;
    public category:Category;
    public productDate:Date;
    public image:string;
    public description: string;

    constructor(id:string,pname:string,price:number,category:Category,productDate:Date,image:string,description: string){
        this.id=id;
        this.pname=pname;
        this.price=price;
        this.category=category;
        this.productDate=productDate;
        this.image=image;
        this.description=description
    }
}
