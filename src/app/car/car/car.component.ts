import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../car.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  private _car: Car;
  public imagePath: SafeUrl;
  constructor(public sanitizer: DomSanitizer) {}

  ngOnInit() {}

  get car(): Car {
    return this._car;
  }

  @Input('car')
  set car(value: Car) {
    this._car = value;
  }
}
