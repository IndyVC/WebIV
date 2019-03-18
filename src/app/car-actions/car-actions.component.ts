import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car.model';
import { CarServiceService } from '../car-service.service';
import { Review } from '../review.model';

@Component({
  selector: 'app-car-actions',
  templateUrl: './car-actions.component.html',
  styleUrls: ['./car-actions.component.css']
})
export class CarActionsComponent implements OnInit {
  private _currentCar: Car;
  rating: number;
  comment: string;

  constructor(private _carService: CarServiceService) {}

  get currentCar() {
    return this._currentCar;
  }

  @Input('currentCar')
  set currentCar(value: Car) {
    this._currentCar = value;
    console.log(value.model + 'readMore');
  }

  ngOnInit() {}

  onSubmit() {
    console.log('CLICKED');
    var rev = new Review(new Date(), this.comment, this.rating, 'INDy');

    this._carService.postReview$(rev).subscribe();
  }
}
