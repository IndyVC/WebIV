import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  logIn$(login: FormGroup) {
    return this.http.post(`${environment.apiUrl}/Account/Login`, login, {
      responseType: 'text'
    });
  }

  register$(register: FormGroup) {
    return this.http.post(`${environment.apiUrl}/Account/Register`, register, {
      responseType: 'text'
    });
  }

  loggedIn(): boolean {
    var token = localStorage.getItem('token') != null;
    return token;
  }
}
