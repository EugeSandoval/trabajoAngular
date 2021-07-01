import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import { ProductDataService } from '../product-data.service';
import { Product } from './product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  productos: Product[] = [];

  constructor(
    private carrito : CarritoService,
    private productDataService: ProductDataService) { 
  }

  ngOnInit(): void {
    this.productDataService.getAll().subscribe(productos => this.productos = productos);
  }

  addToCart(producto: Product): void {


    this.carrito.addToCart(producto);
    producto.stock -= producto.cantidad;
    producto.cantidad = 0;
  }

  maxReached(m: string){
    console.log(m);
  }
 
}
