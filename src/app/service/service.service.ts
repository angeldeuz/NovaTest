import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { mostActiveStock } from '../Model/Stock';


//servicio encargado de mandar llamar la Api y retornar los datos por medio de get
@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor(private http:HttpClient) { }
  Url='https://financialmodelingprep.com/api/v3/stock/actives';

  getStock(){
    return this.http.get<mostActiveStock[]>(this.Url)
  }
}
