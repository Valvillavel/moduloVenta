import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { FormComponent } from './form/form.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'detail/:id', 
    component: DetailComponent
  },
  {
    path:'formulario',
    component: FormComponent
  },
  {
    path:'venta',
    component: VentaComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
