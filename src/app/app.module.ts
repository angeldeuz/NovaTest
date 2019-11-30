import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import de nuestro componente de stock
import { StockComponent } from './components/stock/stock.component';

import { FormsModule } from '@angular/forms';
//importa para traer el servicio donde llamamos los datos del api
import { ServiceService } from '../app/service/service.service';
//import para utilizar llamdas http
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    StockComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
