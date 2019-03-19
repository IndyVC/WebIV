import { Component, OnInit, ViewChild } from '@angular/core';
import { LogInComponent } from '../log-in/log-in.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @ViewChild(LogInComponent) loginComponent: LogInComponent;

  constructor() {}
  ngOnInit() {}

  toggleLogin() {
    this.loginComponent.toggle();
  }
}
