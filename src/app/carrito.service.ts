import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product-list/product';

@Injectable({
  providedIn: 'root'
})

//maneja la logica del carrito
export class CarritoService {

  private _cartList: Product[] = [];
  cartList: BehaviorSubject <Product[]> = new BehaviorSubject(this._cartList);
  item!: Product | undefined;


  constructor() { }

  addToCart(producto: Product) {
    this.item = this._cartList.find((v1)=>v1.nombre==producto.nombre);
    if(!this.item){
      this._cartList.push({ ... producto});
      
    } else{
      this.item.cantidad += producto.cantidad;
    }
    console.log(this._cartList);
    this.cartList.next(this._cartList); //equivalente al emit de eventos
  }

 
}
