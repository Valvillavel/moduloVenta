import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/products.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent  implements OnInit {
  product:any;
  cant=0;
  precioTot=0;
  hab=true;
  habadd=false;
  stock:any;
  total:any;

  constructor(
    private prodService: ProductService,
    private route: ActivatedRoute,
    private router:Router,
    private carritoCompras:CarritoService
  ) { }

  ngOnInit() {
    this.product = this.prodService.getProd(
      +this.route.snapshot.params['id']);
      console.log(this.product)
    this.precioTot = 0;
    this.stock=this.product.stock
    if(this.cant != 0){
      this.hab=false
    }

  }
  subtract(){
    if(this.cant === 0){
      this.hab=true
    }
    this.cant=this.cant-1;
    this.stock=this.product.stock+1
    this.precioTot = this.product.precio*this.cant
  }
  add(){
    this.stock=this.product.stock-1
    this.cant=this.cant+1;
    this.precioTot = this.product.precio*this.cant
    if(this.cant != 0){
      this.hab=false
    }
    if(this.stock===0){
      this.hab=true
    }
    
  }
  addItem(){
    if(this.cant > 0){
      this.product.cantidad = this.cant
      this.product.total = this.precioTot
      this.product.stock=this.stock
      console.log(this.product)
      this.carritoCompras.agregarPedido(this.product)
    }
    this.router.navigateByUrl("")
    
  }
  calcularTotal() : number{
    var total: number = 0.0;
    this.carritoCompras.pedidos.forEach((pedido)=>{
      total += pedido.cantidad * pedido.precio;
    });
  console.log(total)
    return total;
  }

}
