import { Component, OnInit, Input } from '@angular/core';

import { Car } from '../car.model';
import { CarServiceService } from '../car-service.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() Car: Car;

  constructor() {}

  ngOnInit() {}
}
