import { Usuario } from "./usuario";

export class Producto {
    id !: number;
    nombre : string;
    descripcion: string;
    imagenUrl  : string;
    imagenId !: string;
    material   : string;
    precio : number;
    cantidad   : number; 
    usuario : Usuario;

    constructor(nombre:string,descripcion:string,imagenUrl:string,imagenId:string,material:string,precio:number,cantidad:number,usuario:Usuario){
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.imagenUrl=imagenUrl;
        this.imagenId=imagenId;
        this.material=material;
        this.precio=precio;
        this.cantidad=cantidad;
        this.usuario=usuario;
    }
}
