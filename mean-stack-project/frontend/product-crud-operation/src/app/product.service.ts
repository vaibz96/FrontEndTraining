import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './model.product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  ipAddress:string="http://34.239.141.87:9090";

  constructor(public http:HttpClient) { }
  //post methoid 1st parameter and 2nd parameter json data

  storeProductDetailsInfo(productRef:any){
    this.http.post(this.ipAddress+"/product/storeProductDetails", productRef).
    subscribe(result=>console.log(result), error=>console.log(error));
  }

  retrieveAllProductsDetails():Observable<Product[]>{
    return this.http.get<Product[]>(this.ipAddress+"/product/allProductDetails")
  }

  retrieveProductById(id:any):Observable<Product[]>{
    return this.http.get<Product[]>(this.ipAddress+"/product/retrieveProductById"+id)
  }

  deleteProductById(id:any):any{
    return this.http.delete(this.ipAddress+"/product/deleteProductById/"+id, {responseType:'text'});
  }

  updateProductPrice(productRef:any){
    return this.http.put(this.ipAddress+"/product/updateProductPrice", productRef, {responseType:"text"});
  }

}
