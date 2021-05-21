import { HttpClient, HttpEvent } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/classes/category';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/service/product.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  category: Category = new Category('','');
  product: Product = new Product('','',0,this.category, new Date(), '','');
  selectedFile: any;

  constructor(private productService: ProductService,private httpClient: HttpClient) { }

  ngOnInit(): void {
    this.product.productDate = new Date();
  }
  addProduct() {
  
    var fd = new FormData();
    fd.append("img", this.selectedFile);
    fd.append("pname", this.product.pname);
    fd.append("price", this.product.price.toString());
    fd.append("name", this.category.name);
    fd.append("subDescription", this.category.subDescription);
    fd.append("productDate", this.product.productDate.toISOString().toString());
    fd.append("description", this.product.description);
    this.productService.addProductDetails(fd).subscribe((data:any) => {
      console.log(data);
      alert("product added successfully");
    },
      error => console.log(this.product));
  }

  onSubmit(){
    console.log(this.product);
    this.addProduct();
  }

  selectFile(event: any) {
    this.selectedFile = event.target.files[0];
  }

  dateChange(event: any){
    console.log(event);
  }

}
