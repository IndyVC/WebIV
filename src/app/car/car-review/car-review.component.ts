import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';
import { DomSanitizer } from '@angular/platform-browser';
import { CarDataService } from '../car-data.service';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/authentication/authentication.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-car-review',
  templateUrl: './car-review.component.html',
  styleUrls: ['./car-review.component.css']
})
export class CarReviewComponent implements OnInit {
  private _currentCar: Car;
  public review: FormGroup;
  public succes: boolean = false;
  public errorMessage: string;

  constructor(
    private _carService: CarDataService,
    private _authentication: AuthenticationService,
    private _fb: FormBuilder,
    private _route: ActivatedRoute,
    public sanitizer: DomSanitizer
  ) {}

  get currentCar() {
    return this._currentCar;
  }

  @Input('currentCar')
  set currentCar(value: Car) {
    this._currentCar = value;
  }

  ngOnInit() {
    this.review = this._fb.group({
      rating: this._fb.control('', [Validators.required]),
      comment: this._fb.control('', [Validators.required])
    });
    this._route.data.subscribe(res => {
      this._currentCar = res['car'];
    });
  }

  onSubmit() {
    if (this.loggedIn()) {
      var model = this.currentCar.model;
      this._carService.postReview$(model, this.review.value).subscribe(
        res => {
          console.log(res);
          window.location.reload();
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.errorMessage = 'Failed to post review.';
        }
      );
    }
  }

  loggedIn() {
    return this._authentication.loggedIn();
  }
}
