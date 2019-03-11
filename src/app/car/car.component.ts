import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Car } from '../car.model';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() public Car: Car;
  constructor() {}

  ngOnInit() {}
}
