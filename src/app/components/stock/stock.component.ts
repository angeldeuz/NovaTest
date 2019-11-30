import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../../service/service.service';
import { mostActiveStock } from 'src/app/Model/Stock'

//componente stock encargado de mostrar los datos del api en una tabla
@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks:mostActiveStock[];
  constructor(private service:ServiceService) { }

  //funcion para llamar getStock desde el servicio y declararlo en stocks 
  //mandandlo por medio de string iterpolation del ts al html
  //usando el subcribe cada vez que cambie el array actualizara el componente al nuevo array actualizado
  ngOnInit() {
    this.service.getStock()
    .subscribe(data=>{
      this.stocks=data;
      console.log(data);
    })
  }

}
