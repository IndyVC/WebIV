import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CarDataService } from 'src/app/car/car-data.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-change-car',
  templateUrl: './change-car.component.html',
  styleUrls: ['./change-car.component.css']
})
export class ChangeCarComponent implements OnInit {
  public changeCar: FormGroup;
  public image;
  public fileReader: FileReader = new FileReader();
  public errorMessage: string;

  @Input() public modelToChange: string;

  constructor(
    private _carService: CarDataService,
    private _fb: FormBuilder,
    private _router: Router
  ) {}

  ngOnInit() {
    this.changeCar = this._fb.group({
      modelToChange: this._fb.control('', Validators.required),
      model: this._fb.control('', Validators.required),
      brand: this._fb.control('', Validators.required),
      price: this._fb.control('', Validators.required),
      maxSpeed: this._fb.control('', Validators.required),
      maxRange: this._fb.control('', Validators.required),
      chargeTime: this._fb.control('', Validators.required),
      image: this._fb.control('', Validators.required)
    });
  }
  changeListener($event): void {
    this.readThis($event.target);
  }

  readThis(inputValue: any): void {
    var file: File = inputValue.files[0];
    var myReader: FileReader = new FileReader();
    myReader.onloadend = e => {
      this.image = myReader.result;
    };
    // First this is executed, then the onloadend. It reads the blob, then it is transformed into a base64 string.
    myReader.readAsDataURL(file);
  }

  onSubmit() {
    this.modelToChange = this.changeCar.get('modelToChange').value;
    this.changeCar.removeControl('modelToChange');
    this.changeCar.get('image').setValue(this.image);
    this._carService
      .changeCar$(this.modelToChange, this.changeCar.value)
      .subscribe(
        newCar => {
          this._router.navigate(['cars']);
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          this.errorMessage = 'Failed to change car.';
        }
      );
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Is required';
    }
  }
}
