import { Component, OnInit,Input } from '@angular/core';
import { Car } from '../car.model';

@Component({
  selector: 'app-car-actions',
  templateUrl: './car-actions.component.html',
  styleUrls: ['./car-actions.component.css']
})
export class CarActionsComponent implements OnInit {
  private _currentCar: Car;
  rating:number;
  constructor() {}

  get currentCar() {
    return this._currentCar;
  }

  @Input('currentCar')
  set currentCar(value: Car) {
    this._currentCar = value;
    console.log(value.model + 'readMore');
  }

  ngOnInit() {}
}