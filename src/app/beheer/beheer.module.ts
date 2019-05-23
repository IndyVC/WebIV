import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCarComponent } from './add-car/add-car.component';
import { MaterialModule } from '../material/material.module';
import { MaterialFileInputModule } from 'ngx-material-file-input';
import { RouterModule, Routes } from '@angular/router';
import { AdminToolComponent } from './admin-tool/admin-tool.component';
import { ChangeCarComponent } from './change-car/change-car.component';
import { DeleteCarComponent } from './delete-car/delete-car.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: 'admin', canActivate: [AuthGuard], component: AdminToolComponent },
  {
    path: 'admin/addCar',
    canActivate: [AuthGuard],
    component: AddCarComponent
  },
  {
    path: 'admin/changeCar',
    canActivate: [AuthGuard],
    component: ChangeCarComponent
  },
  {
    path: 'admin/deleteCar',
    canActivate: [AuthGuard],
    component: DeleteCarComponent
  }
];
@NgModule({
  declarations: [
    AddCarComponent,
    AdminToolComponent,
    ChangeCarComponent,
    DeleteCarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MaterialFileInputModule,
    RouterModule.forChild(routes)
  ]
})
export class BeheerModule {}
