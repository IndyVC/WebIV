import { Component, OnInit, ViewChild } from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(LogInComponent) loginComponent: LogInComponent;
  @ViewChild(RegisterComponent) registerComponent: RegisterComponent;

  constructor() {}
  ngOnInit() {}

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
}
