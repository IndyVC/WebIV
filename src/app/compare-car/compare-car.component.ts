import { Component, OnInit } from '@angular/core';
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
  items: Array<any> = [];
  private _cars: Car[];
  constructor(private carService: CarServiceService) {
    this.items = [
      (this._cars = carService.cars),
      { name: 'TEST1' },
      { name: 'TEST2' },
      { name: 'TEST3' },
      { name: 'TEST4' }
    ];
  }

  get cars(): Car[] {
    return this._cars;
  }

  ngOnInit() {}
}
