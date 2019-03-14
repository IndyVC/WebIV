import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatListModule,
  MatCardModule,
  MatIconModule,
  MatTooltipModule,
  MatSidenavModule,
  MatToolbarModule,
  MatInputModule,
  MatDialogModule,
  MatSliderModule
} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { CompareCarComponent } from './compare-car/compare-car.component';
import { CarComponent } from './car/car.component';
import { Ng2CarouselamosModule } from 'ng2-carouselamos';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LogInComponent } from './log-in/log-in.component';
import { RegistreerComponent } from './registreer/registreer.component';
import { CarActionsComponent } from './car-actions/car-actions.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    CompareCarComponent,
    CarComponent,
    LogInComponent,
    RegistreerComponent,
    CarActionsComponent
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatCheckboxModule,
    BrowserAnimationsModule,
    MatListModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatExpansionModule,
    MatFormFieldModule,
    Ng2CarouselamosModule,
    FlexLayoutModule,
    MatTooltipModule,
    MatSidenavModule,
    MatToolbarModule,
    MatInputModule,
    FormsModule,
    MatDialogModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}