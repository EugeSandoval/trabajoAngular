import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent implements OnInit {

  constructor() { } 

  @Input()
  cantidad!: number;

  @Input()
  max!: number;

  @Output()
  cantidadChange: EventEmitter<number> =new EventEmitter<number>();

  @Output()
  maxReached: EventEmitter<string> =new EventEmitter<string>();

  ngOnInit(): void {
  }

  upQuantity(): void{
    if(this.cantidad < this.max) {
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);
    }
    else{
      this.maxReached.emit("Se alcanzó el maximo");
    }
      
    
  }

  downQuantity(): void{
    if(this.cantidad>0){
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
    }
    
  }

  //no se puede escribir cantidad de productos mayor al stock, ni numeros negativos ni strings
  changeQuantity(event: any): void{
    if(event.keyCode>57 || event.keyCode<48) {
      this.cantidad = 0;
      this.cantidadChange.emit(this.cantidad);
    } 
    else if(this.cantidad>this.max) {
      this.cantidad = this.max;
      this.cantidadChange.emit(this.cantidad);
    } 
  }
}
