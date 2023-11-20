import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.scss'],
})
export class VentaComponent  implements OnInit {
nit:any;
name:any;
rep:any;
total:any;
items:any;

  constructor(
    private carritoCompras:CarritoService
  ) { }

  ngOnInit() {
    this.items=this.carritoCompras.pedidos.length
    this.total=this.calcularTotal()
    console.log()
  }
  calcularTotal() : number{
    var total: number = 0.0;
    this.carritoCompras.pedidos.forEach((pedido)=>{
      total += pedido.cantidad * pedido.precio;
    });

    return total;
  }

}
