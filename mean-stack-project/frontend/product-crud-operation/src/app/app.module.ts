import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeleteProductByIdComponent } from './delete-product-by-id/delete-product-by-id.component';
import { StoreProductComponent } from './store-product/store-product.component';
import { RetreiveProductComponent } from './retreive-product/retreive-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RetrieveByIdComponent } from './retrieve-by-id/retrieve-by-id.component';

@NgModule({
  declarations: [
    AppComponent,
    DeleteProductByIdComponent,
    StoreProductComponent,
    RetreiveProductComponent,
    UpdateProductComponent,
    RetrieveByIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
