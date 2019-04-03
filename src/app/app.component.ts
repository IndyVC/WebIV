import { Component } from '@angular/core';
import { Car } from './car.model';
import { CarDataService } from './car-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Electric';
  private _currentCar: Car;
  public cars: Car[];
  public waitForCars: Observable<Car[]> = this._carService.cars$;

  constructor(private _carService: CarDataService) {
    this.waitForCars.subscribe(cars => {
      console.log(cars);
      this.cars = cars;
    });
  }

  get currentCar(): Car {
    return this._currentCar;
  }

  changedCar(event) {
    console.log(event as Car);
    this._currentCar = event;
  }

  isEmpty() {
    return this.cars.values.length == 0 || this.cars == null;
  }
}
