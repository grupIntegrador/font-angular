import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';
import { ToastrService } from "ngx-toastr";
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/models/nuevo-usuario';
import { TokenService } from 'src/app/services/token.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario';

@Component({
  selector: 'app-new-producto',
  templateUrl: './new-producto.component.html',
  styleUrls: ['./new-producto.component.css']
})
export class NewProductoComponent implements OnInit {

    nombre: string = "";
    descripcion: string ="";
    imagenUrl: string="";
    imagenId: string="";
    material : string="";
    precio : number= 0;
    cantidad : number = 0; 
    usuario !:Usuario;

  constructor(private productoService:ProductoService,
    private toaster:ToastrService,
    private router:Router,
    private tokenService:TokenService,
    private authService:AuthService
    ) { }

    

  ngOnInit(): void {
    this.authService.getUserByUsername(this.tokenService.getUsername()).subscribe(
        data=>{
          this.usuario = data;
          this.imagenUrl ="";
          this.imagenId=""
        }
      )
  }

  create(){
    const producto = new Producto(
      this.nombre,
      this.descripcion,
      this.imagenUrl,
      this.imagenId,
      this.material,
      this.precio,
      this.cantidad,
      this.usuario
    )

    this.productoService.create(producto).subscribe(
      data=>{
        this.toaster.success('Producto creado','OK',{
          timeOut:3000
        })
        this.router.navigate(['lista']);
      },err => {
        this.toaster.error(err.error.mensaje,'Fail',{
          timeOut:3000
        })
      }
    )
  }

}
