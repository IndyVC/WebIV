import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  Router,
  PreloadAllModules
} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CarSlideComponent } from './car/car-slide/car-slide.component';
import { AddCarComponent } from './beheer/add-car/add-car.component';
import { MenuComponent } from './menu/menu.component';
import { CarReviewComponent } from './car/car-review/car-review.component';
import { CarResolver } from './car/car-resolver';
import { HomeComponent } from './home/home.component';
import { AdminToolComponent } from './beheer/admin-tool/admin-tool.component';
import { DeleteCarComponent } from './beheer/delete-car/delete-car.component';
import { ChangeCarComponent } from './beheer/change-car/change-car.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'cars', component: CarSlideComponent },
  {
    path: 'review/:model',
    component: CarReviewComponent,
    resolve: { car: CarResolver }
  },
  {
    path: 'admin',
    loadChildren: 'app/beheer/beheer.module#BeheerModule'
  },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
