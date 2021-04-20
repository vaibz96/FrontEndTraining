import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  updateMsg?:string;

  constructor(public productService:ProductService) { }

  ngOnInit(): void {
  }

  updatePrice(productRef:any){
    console.log(productRef);
    this.productService.updateProductPrice(productRef).subscribe((result:string)=>{
      this.updateMsg=result;
    })
  }

}
