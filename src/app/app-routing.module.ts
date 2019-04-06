import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarSlideComponent } from './car/car-slide/car-slide.component';
import { AddCarComponent } from './beheer/add-car/add-car.component';
import { MenuComponent } from './menu/menu.component';
import { CarReviewComponent } from './car/car-review/car-review.component';
import { CarResolver } from './car/car-resolver';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cars', component: CarSlideComponent },
  { path: 'beheer', component: AddCarComponent },
  {
    path: 'review/:model',
    component: CarReviewComponent,
    resolve: { car: CarResolver }
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
