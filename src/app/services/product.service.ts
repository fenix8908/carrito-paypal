import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productos: Product[] = [
    new Product(1, "Nba", "Juego actual de la Nba", 24, "https://images-na.ssl-images-amazon.com/images/I/71dMcqvTh8L._SL1500_.jpg"),
    new Product(2, "GTAV", "Grant thef Auto 5", 24.3, "https://images-na.ssl-images-amazon.com/images/I/81O79Btg3ML._SL1500_.jpg"),
    new Product(3, "Call Of Duty", "Chumbimba como un berraco", 35.2, "https://images-na.ssl-images-amazon.com/images/I/81GN6gepa5L._SL1500_.jpg"),
    new Product(4, "Dios de la gerra", "pelea y pelea", 19.4, "https://images-na.ssl-images-amazon.com/images/I/813xlI-NGpL._SL1500_.jpg"),
    new Product(5, "net for speed", "rapidos y furiosos", 24, "https://images-na.ssl-images-amazon.com/images/I/71epK-pP%2B9L._SL1245_.jpg")
  ];

  getProducts():Product[]{
    return this.productos;
  }

  constructor() { }
}
