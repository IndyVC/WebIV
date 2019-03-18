import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CarDataService } from '../car-data.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor(private _carService: CarDataService) {}

  ngOnInit() {}

  Validate(email: HTMLInputElement, password: HTMLInputElement) {
    console.log('CLICKED');
    var LoginDTO = {
      email: email.value,
      password: password.value
    };
    //this._carService.login$(LoginDTO).subscribe(res => console.log(res));
  }
}
