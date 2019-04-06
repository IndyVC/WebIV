import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car/add-car.component';
import { MaterialModule } from '../material/material.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';

@NgModule({
  declarations: [AddCarComponent],
  imports: [CommonModule, MaterialModule, MaterialFileInputModule]
})
export class BeheerModule {}
