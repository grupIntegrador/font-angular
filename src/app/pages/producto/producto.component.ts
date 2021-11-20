import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Producto } from 'src/app/models/producto';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  producto !:Producto;

  constructor(
    private productoService:ProductoService,
    private activatedRute:ActivatedRoute,
    private toaster:ToastrService,
    private router:Router
  ) { }

  ngOnInit(): void {
    const id = this.activatedRute.snapshot.params.id;
    this.productoService.detail(id).subscribe(
      data=>{
        this.producto =data;
      },err=>{
        this.toaster.error(err.error.mensaje,'Fail',{
          timeOut:3000
        });
        this.volver()
      }
    )
  }

  volver():void{
    this.router.navigate(['/lista'])
  }

}
