import { CarItemModel } from './../models/car-item-model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  exiteElCarrito(): boolean {
    return localStorage.getItem('cart') != null;
  }

  agregarAlCarrito(cart: CarItemModel[]): void {
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  getCarro():CarItemModel[]{
    return JSON.parse(localStorage.getItem('cart'));
  }

  limpiarCarrito(){
    localStorage.removeItem('cart');
  }
}
