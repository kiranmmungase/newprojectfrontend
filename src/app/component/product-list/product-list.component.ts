import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any
  constructor(private productService: ProductService, private router:Router) { }

  ngOnInit(): void {
    this.getProducts();
  }

   getProducts(){
    this.productService.findAllProductDetails().subscribe(data =>{
      this.products = data;
      console.log(data);
    })
  }
  updateProduct(id:string){
    this.router.navigate(['updateproduct',id]);
  }

  deleteProduct(id:String){
    this.productService.deleteProduct(id).subscribe(data =>{
      console.log(data);
      this.getProducts();
      alert("deleted product successfully")
    });
  }

  getImagePath(url:string){
    return url.split("\\images\\")[1];
  }
}
