import { Component, Input, OnInit } from '@angular/core';
import { CarItemModel } from 'src/app/models/car-item-model';

@Component({
  selector: 'app-car-item',
  templateUrl: './car-item.component.html',
  styleUrls: ['./car-item.component.css']
})
export class CarItemComponent implements OnInit {

  @Input()
  carItem:CarItemModel;

  constructor() { }

  ngOnInit(): void {
  }

}
