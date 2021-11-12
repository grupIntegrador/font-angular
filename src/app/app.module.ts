import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';

//Externo
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ProductosComponent } from './pages/productos/productos.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { NewProductoComponent } from './pages/new-producto/new-producto.component';
import { UpdateProductoComponent } from './pages/update-producto/update-producto.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { MenuComponent } from './menu/menu/menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { interceptorProvider } from './interceptor/prod-interceptor.service';
import { EquipoComponent } from './pages/equipo/equipo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProductosComponent,
    ProductoComponent,
    NewProductoComponent,
    UpdateProductoComponent,
    LoginComponent,
    RegisterComponent,
    MenuComponent,
    AdminListComponent,
    EquipoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule {}
