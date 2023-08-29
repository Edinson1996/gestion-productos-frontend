import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path:'',component:ProductosComponent},
  {path:'formulario',component:ProductoFormComponent},
  {path:'formulario/:id',component:ProductoFormComponent},
  {path:'index',component:IndexComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
