import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CarritoService } from '../carrito.service';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-bluemoon-carrito',
  templateUrl: './bluemoon-carrito.component.html',
  styleUrls: ['./bluemoon-carrito.component.scss']
})
export class BluemoonCarritoComponent implements OnInit {
  
  cartList$: Observable<Product[]> | undefined;
  constructor(private carrito: CarritoService) { 
    this.cartList$ = carrito.cartList.asObservable();
    //carrito.cartList.subscribe((observable)=>this.cartList = observable);
  }

  ngOnInit(): void {
  }


}
