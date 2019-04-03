import { Injectable } from '@angular/core';
import { CARS } from './mock.cars';
import { Car } from './car.model';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CarDataService {
  constructor(private http: HttpClient) {}

  get cars$(): Observable<Car[]> {
    return this.http
      .get(`${environment.apiUrl}/Cars`)
      .pipe(map((list: any[]): Car[] => list.map(c => Car.fromJSON(c))));
  }

  postReview$(modelCar: string, payload: FormGroup) {
    return this.http.post(`${environment.apiUrl}/Cars/${modelCar}`, payload, {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    });
  }

  postCar$(payload: FormGroup) {
    return this.http.post(`${environment.apiUrl}/Cars`, payload, {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    });
  }

  deleteCar$(modelCar: string) {
    return this.http.delete(`${environment.apiUrl}/Cars/${modelCar}`, {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    });
  }

  changeCar$(modelCar: string, payload: FormGroup) {
    return this.http.put(`${environment.apiUrl}/Cars/${modelCar}`, payload, {
      headers: new HttpHeaders({
        Authorization: 'bearer ' + localStorage.getItem('token')
      })
    });
  }
}
