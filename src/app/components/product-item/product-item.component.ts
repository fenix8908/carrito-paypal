import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  producto:Product;

  constructor(private mensajeService:MessageService) {

   }

  ngOnInit(): void {
  }

  agregarAlCarro(){
    this.mensajeService.enviarMensage(this.producto);
  }

}
