import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/classes/order';
import { PaymentDto } from 'src/app/classes/payment-dto';
import { UserDto } from 'src/app/classes/user-dto';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  userDto:UserDto = new UserDto('','','','','');
  paymentDto:PaymentDto=new PaymentDto('','',0,0,0);

  order:Order = new Order('',0,0,this.userDto,this.paymentDto,'');

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
  }

  addOrder(){
    this.orderService.addorderDetails(Order).subscribe((data:any) =>{
      console.log(data);
      alert("product added successfully");
    },
    error => console.log(this.order));
  }

  onSubmit(){
    console.log(this.order);
    this.addOrder();
  }

}
