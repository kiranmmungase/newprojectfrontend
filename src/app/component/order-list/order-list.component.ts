import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/service/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders:any;

  constructor(private orderService:OrderService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.orderService.findAllOrderDetails().subscribe(data =>{
      this.orders = data;
      console.log(data);
    })
  }

}
