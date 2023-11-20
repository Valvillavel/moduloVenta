import { Injectable } from '@angular/core';
import { IPedido } from '../shared/pedido.model';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  pedidos: Array<IPedido>;

  constructor() {
    this.pedidos = [];
  }

  agregarPedido(pedido:IPedido){
    this.pedidos.push(pedido);
  }

  pagarPedido(){
    this.pedidos = [];
  }
}
