import { StorageService } from './../../services/storage.service';
import { Component, OnInit } from '@angular/core';
import { CarItemModel } from 'src/app/models/car-item-model';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  carItems = [];
  total = 0;

  constructor(
    private messageService: MessageService,
    private storageService:StorageService
    ) { }

  ngOnInit(): void {
    if(this.storageService.exiteElCarrito()){
      this.carItems = this.storageService.getCarro();
    }
    this.obtenerItem();
    this.total = this.getTotal();
  }

  obtenerItem(): void {
    this.messageService.recibirMensage().subscribe((product: Product) => {
      let existe = false;
      this.carItems.forEach(item => {
        if (item.idProducto === product.id) {
          existe = true;
          item.cantidad++;
        }
      });
      if (!existe) {
        const carItem = new CarItemModel(product);
        this.carItems.push(carItem);
      }
      this.total = this.getTotal();
      this.storageService.agregarAlCarrito(this.carItems);
    });
  }

  getTotal(): number {
    let total = 0;
    this.carItems.forEach(item => {
      total += item.cantidad * item.precioProducto;
    });
    return +total.toFixed(2);
  }

  limpiarCarro(): void {
    this.carItems = [];
    this.total = 0;
    this.storageService.limpiarCarrito();
  }

  eliminarItem(index: number): void {

    if (this.carItems[index].cantidad > 1) {
      this.carItems[index].cantidad--;
    } else {
      this.carItems.splice(index, 1);
    }
    this.total = this.getTotal();
    this.storageService.agregarAlCarrito(this.carItems);
  }

}
