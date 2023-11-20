import { Component, OnInit } from '@angular/core';
import { IProduct } from '../shared/products.model';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  products: IProduct[] | undefined;
  babria: IProduct[]| undefined;
  totalProd: number | undefined;
  totProd: any[] = []
  total:any;
  item:any;
  compra:any[] = [];
  form:any;

  constructor(
    private productService:ProductService,
    private routeinf: ActivatedRoute,
    private router:Router,
    private carritoCompras:CarritoService

  ) {
  }
  ngOnInit() {
    this.compra=this.carritoCompras.pedidos
    console.log(this.compra)
    this.products = this.productService.getProducts();
    this.totProd = this.products
  }
  
  segmentChanged(event: any){
    this.products = this.productService.getProducts();
    let val = event.detail.value
    if(val === 'default'){
      this.totProd = this.products
    }else{
      this.totProd =[]
      if(val === 'sanat'|| val === 'sanat1'){
        this.products.map((item) => {
          if(item.segment === 'sanat'){
            this.totProd.push(item)
          }
        })
      }
      if(val === 'babaria'|| val ==='babaria1'){
        this.products.map((item) => {
          if(item.segment === 'babaria'){
            this.totProd.push(item)
          }
        })
      }
    }
    
    

  }
  formView(){
    console.log(this.compra)
    this.router.navigateByUrl("/formulario")
  }
  calcularTotal() : number{
    var total: number = 0;
    this.carritoCompras.pedidos.forEach((pedido)=>{
      total += pedido.cantidad * pedido.precio;
    });
  console.log(total)
    return total;
  }

}
