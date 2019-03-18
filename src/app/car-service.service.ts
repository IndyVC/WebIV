import { Injectable } from '@angular/core';
import { CARS } from './mock.cars';
import { Car } from './car.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Review } from './review.model';

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

  postReview$(payload: Review) {
    console.log(payload);
    return this.http.post(`${environment.apiUrl}/Cars/1`, payload);
  }
}
