import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../classes/product'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseURl="http://localhost:8080/add";
  private getURL="http://localhost:8080/findAllProducts";
  private putURL="http://localhost:8080/ProductUpdate/";
  private getURLId="http://localhost:8080/findProduct/";
  private deleteURL="http://localhost:8080/deleteProduct/";

  constructor(private httpClient:HttpClient) { }

  addProductDetails(product:any){
    return this.httpClient.post(this.baseURl,product, {responseType: 'text'});
  }

  findAllProductDetails(){
    return this.httpClient.get(this.getURL);
  }

 findProductId(id:String):Observable<Product>{
  return this.httpClient.get<Product>(this.getURLId+id);
 }

 updateProductById(id:String, product:any){
  return this.httpClient.put(this.putURL+id,product,{responseType: "text"});
}

deleteProduct(id:String):Observable<Product>{
  return this.httpClient.delete<Product>(this.deleteURL+id,{responseType: "text" as "json"});
}

  
}
