import { Component, OnInit, Input } from '@angular/core';
import { CarDataService } from '../car-data.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Car } from '../car.model';

@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  public newCar: FormGroup;
  public fileReader: FileReader = new FileReader();
  public image;
  @Input() public currentCar: Car;

  constructor(private _carService: CarDataService, private _fb: FormBuilder) {}

  ngOnInit() {
    this.newCar = this._fb.group({
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
    myReader.readAsDataURL(file);
  }

  onSubmit() {
    console.log(this.image);
    console.log(this.newCar.get('image').value);
    this.newCar.get('image').setValue(this.image);
    this._carService.postCar$(this.newCar.value).subscribe(newCar => {
      console.log(newCar);
    });
  }

  changeCar() {
    console.log(this.newCar.get('model').value);
    this._carService
      .changeCar$(this.newCar.get('model').value, this.newCar.value)
      .subscribe(changedCar => {
        console.log(changedCar);
      });
  }

  deleteCar() {
    console.log(this.newCar.get('model').value);
    this._carService
      .deleteCar$(this.newCar.get('model').value)
      .subscribe(deletedCar => {
        console.log(deletedCar);
      });
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'Is required';
    }
  }
}
