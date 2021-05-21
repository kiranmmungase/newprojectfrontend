import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseURl="http://localhost:8080/addOrder";
  private getURL="http://localhost:8080/findAllOrder";

  constructor(private httpClient:HttpClient) { 

  }

  addorderDetails(order:any){
    return this.httpClient.post(this.baseURl,order, {responseType: 'text'});
  }
  findAllOrderDetails(){
    return this.httpClient.get(this.getURL);
  }
}
