import { Car } from './car.model';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { CarDataService } from './car-data.service';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarResolver implements Resolve<Car> {
  constructor(private _carService: CarDataService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Car> {
    return this._carService.car$(route.params['model']);
  }
}
