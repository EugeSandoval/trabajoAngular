import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BluemoonAboutComponent } from './bluemoon-about/bluemoon-about.component';
import { BluemoonCarritoComponent } from './bluemoon-carrito/bluemoon-carrito.component';
import { BluemoonMenuComponent } from './bluemoon-menu/bluemoon-menu.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    component: BluemoonMenuComponent
  },
  {
    path: 'about',
    component: BluemoonAboutComponent
  },
  {
    path: 'carrito',
    component: BluemoonCarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
