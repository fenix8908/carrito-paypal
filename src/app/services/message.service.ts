import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  mensaje = new Subject();

  constructor() { }

  enviarMensage(product: Product): void {
    this.mensaje.next(product);
  }

  recibirMensage(): Observable<any> {
    return this.mensaje.asObservable();
  }
}
