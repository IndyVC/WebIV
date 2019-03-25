import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registreer',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }
}
