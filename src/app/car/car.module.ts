import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarComponent } from './car/car.component';
import { CarReviewComponent } from './car-review/car-review.component';
import { CarSlideComponent } from './car-slide/car-slide.component';
import { MaterialModule } from '../material/material.module';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [CarComponent, CarReviewComponent,CarSlideComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule]
})
export class CarModule {}
