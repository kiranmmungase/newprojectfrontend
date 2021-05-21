export class PaymentDto {
    public id:string;
    public mode:string;
    public ccNumber:number;
    public cvv:number;
    public totalAmount:number;

    constructor(id:string,mode:string,ccNumber:number,cvv:number,totalAmount:number){
        this.id=id;
        this.mode=mode;
        this.ccNumber=ccNumber;
        this.cvv=cvv;
        this.totalAmount=totalAmount;
    }
}
