import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent  implements OnInit {
  desc=0;
  total:any;
  items:any;
  constructor(
    private formBuilder: FormBuilder,
    private carritoCompras:CarritoService
  ) { }
  registerForm = this.formBuilder.group({
    fecha:[''],
    repartidor: [''],
    turno: [''],
    promo: [''],
    tipoventa: [''],
    totalparcial: [''],
    desefectivo: [''],
    descporcentual: [''],
    total: [''],
  });

  ngOnInit() {
    this.items=this.carritoCompras.pedidos.length
    this.total=this.calcularTotal()
    console.log(this.carritoCompras.pedidos)
  }

  calcularTotal() : number{
    var total: number = 0.0;
    this.carritoCompras.pedidos.forEach((pedido)=>{
      total += pedido.cantidad * pedido.precio;
    });

    return total;
  }
}
