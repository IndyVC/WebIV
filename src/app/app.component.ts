import { Component } from '@angular/core';
import { Car } from './car.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electric';
  private _currentCar: Car;

  constructor() {}

  get currentCar(): Car {
    return this._currentCar;
  }

  changedCar(event) {
    console.log(event);
    this._currentCar = event;
  }
}
