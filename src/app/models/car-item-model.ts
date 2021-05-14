import { Product } from "./product";

export class CarItemModel {
  idProducto:number;
  nombreProducto:string;
  precioProducto:number;
  cantidad:number;

  constructor(producto:Product){
    this.idProducto = producto.id;
    this.nombreProducto = producto.nombre;
    this.precioProducto = producto.precio;
    this.cantidad = 1;
  }
}
