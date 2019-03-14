import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import 'hammerjs';
import 'hammer-timejs';
import { Car } from '../car.model';

@Component({
  selector: 'app-compare-car',
  templateUrl: './compare-car.component.html',
  styleUrls: ['./compare-car.component.css']
})
export class CompareCarComponent implements OnInit {
  private _cars: Car[];
  CurrentCar: Car;
  index: number = 0;
  @Output() public EmitCar = new EventEmitter<Car>();

  constructor(private carService: CarServiceService) {
    this._cars = carService.cars;
    this.CurrentCar = this._cars[this.index];
  }

  get cars(): Car[] {
    return this._cars;
  }

  swipeLeft() {
    if (this.index == this._cars.length - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    this.CurrentCar = this._cars[this.index];
    this.emitCar();
  }

  swipeRight() {
    if (this.index == 0) {
      this.index = this._cars.length - 1;
    } else {
      this.index--;
    }
    this.CurrentCar = this._cars[this.index];
    this.emitCar();
  }

  emitCar() {
    this.EmitCar.emit(this.CurrentCar);
  }
  ngOnInit() {
    this.emitCar();
  }
}
