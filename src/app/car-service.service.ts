import { Injectable } from '@angular/core';
import { CARS } from './mock.cars';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  private _cars = CARS;
  constructor() {}

  get cars(): Car[] {
    return this._cars;
  }
}
