import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-registreer',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public show: boolean = false;
  public register: FormGroup;
  public errorMessage: string;
  constructor(
    private _authenticate: AuthenticationService,
    private _fb: FormBuilder
  ) {}

  /*
  source regex:
  https://stackoverflow.com/questions/19605150/regex-for-password-must-contain-at-least-eight-characters-at-least-one-number-a
  */
  ngOnInit() {
    this.register = this._fb.group({
      email: this._fb.control('', [Validators.required, Validators.email]),
      password: this._fb.control('', [
        Validators.required,
        Validators.pattern(
          '^((?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[^a-zA-Z0-9])|(?=.*?[A-Z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])|(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^a-zA-Z0-9])).{8,}$'
        )
      ]),
      firstName: this._fb.control('', Validators.required),
      lastName: this._fb.control('', Validators.required)
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
    console.log(this.register.value);
    this._authenticate.register$(this.register.value).subscribe(
      token => {
        localStorage.setItem('token', token);
        console.log(token);
        this.toggle();
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.errorMessage =
          'Failed to register or email is already registered!';
      }
    );
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Is required';
    } else if (errors.pattern) {
      return 'Passwords must be at least 8 characters and contain at 3 of 4 of the following: upper case (A-Z), lower case (a-z), number (0-9) and special character (e.g. !@#$%^&*)';
    } else {
      return 'The given format is wrong';
    }
  }
}
