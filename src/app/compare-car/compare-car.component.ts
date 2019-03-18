import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CarServiceService } from '../car-service.service';
import 'hammerjs';
import 'hammer-timejs';
import { Car } from '../car.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-compare-car',
  templateUrl: './compare-car.component.html',
  styleUrls: ['./compare-car.component.css']
})
export class CompareCarComponent implements OnInit {
  @Input() public cars: Car[];
  currentCar: Car;
  size: number;
  index: number = 0;

  @Output() public EmitCar = new EventEmitter<Car>();

  constructor(private carService: CarServiceService) {}

  swipeLeft() {
    if (this.index == this.size - 1) {
      this.index = 0;
    } else {
      this.index++;
    }
    this.currentCar = this.cars[this.index];
    this.emitCar();
  }

  swipeRight() {
    if (this.index == 0) {
      this.index = this.size - 1;
    } else {
      this.index--;
    }
    this.currentCar = this.cars[this.index];
    this.emitCar();
  }

  emitCar() {
    this.EmitCar.emit(this.currentCar);
    console.log(this.currentCar);
    console.log('EMIITED CAR');
  }
  ngOnInit() {
    this.currentCar = this.cars[this.index] as Car;
    console.log(this.currentCar + 'TEST');
    this.size = this.cars.length;
    this.emitCar();
  }
}
