import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ProdGuardService as guard } from './guards/prod-guard.service';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { HomeComponent } from './pages/home/home.component';
import { NewProductoComponent } from './pages/new-producto/new-producto.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { ProductosComponent } from './pages/productos/productos.component';
import { UpdateProductoComponent } from './pages/update-producto/update-producto.component';



const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"lista",component:ProductosComponent},
  {path:"admin-list",component:AdminListComponent,canActivate:[guard],data:{expectedRol:['admin']}},
  {path:"detalle/:id",component:ProductoComponent},
  {path:"nuevo",component:NewProductoComponent,canActivate:[guard],data:{expectedRol:['admin']}},
  {path:"update/:id",component:UpdateProductoComponent,canActivate:[guard],data:{expectedRol:['admin']}},
  {path:"**",redirectTo:"",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
