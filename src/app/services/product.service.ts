import { Injectable } from '@angular/core';
import { IProduct } from '../shared/products.model';
import { SAVED_PRODUCTS } from '../shared/products';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): IProduct[]{
    return SAVED_PRODUCTS.slice(0);
  }
  getProd(id: number){
    return SAVED_PRODUCTS.slice(0).find(run => run.id == id)
  }

  getTotalProducts(allProducts: IProduct[]){
    return allProducts.length;
  }

  




}
