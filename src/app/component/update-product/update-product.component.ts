import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/classes/category';
import { Product } from 'src/app/classes/product';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  id!: String;
  category: Category = new Category('','');
  product: Product = new Product('','',0,this.category, new Date(), '','');
  gotoList: any;
  selectedFile: any;

  constructor(private productService:ProductService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    
   this.id = this.route.snapshot.params['id'];
    this.productService.findProductId(this.id).subscribe(data => {
      this.product = data;
    },error => console.log(error));
    this.product.productDate = new Date();

  }
  updateProduct(){
    var fd = new FormData();
    fd.append("img", this.selectedFile);
    fd.append("pname", this.product.pname);
    fd.append("price", this.product.price.toString());
    fd.append("name", this.category.name);
    fd.append("subDescription", this.category.subDescription);
    fd.append("productDate", this.product.productDate.toISOString().toString());
    fd.append("description", this.product.description);
    this.productService.updateProductById(this.id, fd).subscribe(data => {
  console.log(data);
  alert("Book updated Successfully !!")

    },
    error =>console.log(this.product));
  }

  onSubmit(){
    console.log(this.product);
    this.updateProduct();
      }

      selectFile(event: any) {
        this.selectedFile = event.target.files[0];
      }

}
