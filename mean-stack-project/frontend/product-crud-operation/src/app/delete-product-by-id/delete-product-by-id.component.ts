import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product-by-id',
  templateUrl: './delete-product-by-id.component.html',
  styleUrls: ['./delete-product-by-id.component.css']
})
export class DeleteProductByIdComponent implements OnInit {

  deleteMsg?:string;

  constructor(public prodSer:ProductService) { }

  ngOnInit(): void {
  }

  deleteById(id:any){
    console.log(id);
    this.prodSer.deleteProductById(id).subscribe((result:string)=>{
      this.deleteMsg=result;
    })
  }

}
