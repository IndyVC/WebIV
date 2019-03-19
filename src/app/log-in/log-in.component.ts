import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public show: boolean = false;
  constructor(private _carService: CarDataService) {}

  ngOnInit() {}

  toggle() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
