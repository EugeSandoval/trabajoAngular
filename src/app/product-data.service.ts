import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Product } from './product-list/product';

const URL= 'https://60dcb97ec2b6280017febc32.mockapi.io/bluemoon/cakes';

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient ) { }

  //consume la API de productos y devuelve observable a la respuesta.
  public getAll(): Observable<Product[]> {
    //fetch('url, {method: 'GET})
    return this.http.get<Product[]>(URL)
    //consumir la api rest
    .pipe(
      tap((productos : Product[]) => productos.forEach(producto => producto.cantidad = 0))  
    );
  }
}


