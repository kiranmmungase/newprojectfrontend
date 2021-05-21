import { UserDto } from '../classes/user-dto'
import { PaymentDto } from './payment-dto';
export class Order {
    public id:string;
    public orderNo:number;
    public amount:number;
    public userDto:UserDto;
    public paymentDto:PaymentDto;
    public status:string;

    constructor(id:string,orderNo:number,amount:number,userDto:UserDto,paymentDto:PaymentDto,status:string){
        this.id=id;
        this.orderNo=orderNo;
        this.amount=amount;
        this.userDto=userDto;
        this.paymentDto=paymentDto;
        this.status=status;
    }
}
