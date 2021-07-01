import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { BluemoonCarritoComponent } from './bluemoon-carrito/bluemoon-carrito.component';
import { FormsModule } from '@angular/forms';
import { BluemoonAboutComponent } from './bluemoon-about/bluemoon-about.component';
import { BluemoonMenuComponent } from './bluemoon-menu/bluemoon-menu.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    BluemoonCarritoComponent,
    BluemoonAboutComponent,
    BluemoonMenuComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
