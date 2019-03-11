import { Injectable } from '@angular/core';
import { CARS } from './mock.cars';
import { Car } from './car.model';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  public currentIndex: number = 0;
  public size: number;

  private _cars = CARS;
  constructor() {
    this.size = this.cars.length;
  }

  get cars(): Car[] {
    return this._cars;
  }

  plus(): number {
    this.currentIndex++;
    if (this.currentIndex >= this.size) {
      return this.currentIndex % this.size;
    } else {
      return this.currentIndex;
    }
  }
  min(): number {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      return (this.currentIndex = this.size - 1);
    } else {
      return this.currentIndex;
    }
  }
}
