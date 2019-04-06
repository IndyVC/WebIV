import { Component } from '@angular/core';
import { Car } from './car/car.model';
import { CarDataService } from './car/car-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electric';

  constructor() {}
}
