import { Component } from '@angular/core';
import {PromocionesService, Promo} from '../shared/promociones.service';

import { Message } from 'primeng/api';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {
  promociones:Promo[];
  index:number=-1;
  datos!: Promo;
  mensaje!: Message[];

  constructor(public servicio: PromocionesService) {
    this.promociones=this.servicio.getPromociones();
    console.log(this.promociones);
  }

  ver(aux:string){
    console.log("Estoy en el metodo ver "+aux);
    this.index = this.promociones.findIndex( p => p.nombre === aux);
    console.log(this.index);
    if(this.index !== -1){
      this.datos= this.promociones[this.index];
      //console.log(this.datos);
    }
    else{
      this.mensaje=[{ severity: 'info', summary: 'Lo Sentimos', detail: 'No hay promociones disponibles ese dia' }];
      //this.mensaje="El heroe no existe";
      //console.log(this.mensaje);
      setTimeout(() => {
        this.mensaje=[];
      }, 2000);
    }
  }
}