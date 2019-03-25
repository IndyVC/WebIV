import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';
import { CarDataService } from '../car-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-car-actions',
  templateUrl: './car-actions.component.html',
  styleUrls: ['./car-actions.component.css']
})
export class CarActionsComponent implements OnInit {
  private _currentCar: Car;
  public review: FormGroup;

  constructor(private _carService: CarDataService, private _fb: FormBuilder) {}

  get currentCar() {
    return this._currentCar;
  }

  @Input('currentCar')
  set currentCar(value: Car) {
    this._currentCar = value;
    console.log(value.model + 'readMore');
  }

  ngOnInit() {
    this.review = this._fb.group({
      rating: this._fb.control('', [Validators.required]),
      comment: this._fb.control('', [Validators.required])
    });
  }

  onSubmit() {
    console.log(this.review.value);
    var model = this.currentCar.model;
    this._carService.postReview$(model, this.review.value).subscribe(res => {
      console.log(res);
    });
  }
}
