import { Injectable } from '@angular/core';
import { CARS } from './mock.cars';
import { Car } from './car.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarServiceService {
  constructor(private http: HttpClient) {}

  get cars$(): Observable<Car[]> {
    return this.http
      .get(`${environment.apiUrl}/Cars`)
      .pipe(map((list: any[]): Car[] => list.map(c => Car.fromJSON(c))));
  }
}
