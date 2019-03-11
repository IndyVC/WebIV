import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  constructor() {}
  ngOnInit() {}

  Validate(username: HTMLInputElement, password: HTMLInputElement) {}
}
