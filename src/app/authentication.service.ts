import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  logIn$(payload: any) {
    console.log(payload);
    return this.http.post(`${environment.apiUrl}/Account`, payload);
  }
}
