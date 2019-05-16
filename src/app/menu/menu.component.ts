import { Component, OnInit, ViewChild } from '@angular/core';
import { LogInComponent } from '../authentication/log-in/log-in.component';
import { RegisterComponent } from '../authentication/register/register.component';
import { AuthenticationService } from '../authentication/authentication.service';
import * as JWT from 'jwt-decode';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(LogInComponent) loginComponent: LogInComponent;
  @ViewChild(RegisterComponent) registerComponent: RegisterComponent;

  constructor(
    private _authentication: AuthenticationService,
    private _router: Router
  ) {}

  ngOnInit() {
    this.isAdmin();
  }

  toggleLogin() {
    if (this.registerComponent.show == true) {
      this.registerComponent.toggle();
    }
    this.loginComponent.toggle();
  }
  toggleRegister() {
    if (this.loginComponent.show == true) {
      this.loginComponent.toggle();
    }
    this.registerComponent.toggle();
  }

  loggedIn() {
    return this._authentication.loggedIn();
  }

  logOut() {
    localStorage.removeItem('token');
    this._router.navigate(['/home']);
  }

  isAdmin() {
    if (this.loggedIn()) {
      var token = localStorage.getItem('token');
      var data = JWT(token);
      return (
        data['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] ==
        'Admin'
      );
      //return data.sub == 'Indy.vancanegem@student.hogent.be';
    }
  }
}
