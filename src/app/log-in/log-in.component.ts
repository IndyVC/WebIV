import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public show: boolean = false;
  public login: FormGroup;

  constructor(
    private _authenticate: AuthenticationService,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.login = this._fb.group({
      email: this._fb.control('', [Validators.required, Validators.email]),
      password: this._fb.control('', [Validators.required])
    });
  }

  toggle() {
    if (this.show) {
      this.show = false;
    } else {
      this.show = true;
    }
  }

  onSubmit() {
    console.log(this.login.value);
    this._authenticate.logIn$(this.login.value).subscribe(token => {
      localStorage.setItem('token', token);
      console.log(token);
    });
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Is required';
    } else {
      return 'The given format is wrong';
    }
  }
}
