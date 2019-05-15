import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarDataService } from 'src/app/car/car-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  public deleteCar: FormGroup;
  public errorMessage: string;

  constructor(
    private _carService: CarDataService,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {
    this.deleteCar = this._fb.group({
      model: this._fb.control('', Validators.required)
    });
  }
  onSubmit() {
    this._carService.deleteCar$(this.deleteCar.get('model').value).subscribe(
      deletedCar => {
        console.log(deletedCar);
        this._router.navigate(['cars']);
      },
      (err: HttpErrorResponse) => {
        console.log(err);
        this.errorMessage = 'Failed to delete car.';
      }
    );
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Is required';
    }
  }
}
