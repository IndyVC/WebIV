import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarDataService } from 'src/app/car/car-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-car',
  templateUrl: './delete-car.component.html',
  styleUrls: ['./delete-car.component.css']
})
export class DeleteCarComponent implements OnInit {
  public deleteCar: FormGroup;

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
    this._carService
      .deleteCar$(this.deleteCar.get('model').value)
      .subscribe(newCar => {
        console.log(newCar);
        alert(`Succesfully deleted ${this.deleteCar.get('model').value}`);
        this._router.navigate(['cars']);
      });
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Is required';
    }
  }
}
