import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CarDataService } from '../car-data.service';
import 'hammerjs';
import 'hammer-timejs';
import { Car } from '../car.model';

@Component({
  selector: 'app-slide-car',
  templateUrl: './car-slide.component.html',
  styleUrls: ['./car-slide.component.css']
})
export class CarSlideComponent implements OnInit {
  size: number;
  index: number = 0;
  cars: Car[];
  cars$ = this._carService.cars$;
  currentCar: Car;
  public loadingError$ = this._carService.loadingError$;

  constructor(private _carService: CarDataService) {}

  ngOnInit() {
    this.cars$.subscribe(res => {
      this.cars = res;
      console.log(res);
      this.currentCar = this.cars[this.index];
      this.size = this.cars.length;
    });

    console.log('TEST');
  }

  swipeLeft() {
    if (this.index == this.size - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    this.currentCar = this.cars[this.index];
  }

  swipeRight() {
    if (this.index == 0) {
      this.index = this.size - 1;
    } else {
      this.index--;
    }
    this.currentCar = this.cars[this.index];
  }
}
