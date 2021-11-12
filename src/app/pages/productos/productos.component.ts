import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[]=[];

  constructor(private productoService:ProductoService) { }

  ngOnInit(): void {
    this.listarProductos()
  }

  listarProductos():void{
    this.productoService.lista().subscribe(
      data=>{
        this.productos = data;
      },
      err =>{
        console.log(err);
        
      }
    )
  }
}
