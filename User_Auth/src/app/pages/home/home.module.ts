// import { HomeRoutes } from './../pages.routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomePageComponent } from './home-page/home-page.component';

import { TablerIconsModule } from 'angular-tabler-icons';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatStepperModule } from '@angular/material/stepper';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import { ChambreCardComponent } from './chambre-card/chambre-card.component';
import { ChambreListComponent } from './chambre-list/chambre-list.component';
import { ConfirmReservationDialogComponent } from './confirm-reservation-dialog/confirm-reservation-dialog.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReservationsStatusComponent } from './reservations-status/reservations-status.component';
import { ReviewProfileComponent } from './review-profile/review-profile.component';
import { UserProfileCardComponent } from './user-profile-card/user-profile-card.component';


@NgModule({
  declarations: [
    HomePageComponent,
    ChambreCardComponent,
    ChambreListComponent,
    ConfirmReservationDialogComponent,
    UserProfileComponent,
    ProfileFormComponent,
    ReservationsStatusComponent,
    ReviewProfileComponent,
    UserProfileCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    MatCardModule,
    TablerIconsModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    MatExpansionModule,
    MatMenuModule,
    MatProgressBarModule,
    MatPaginatorModule,
    MatButtonToggleModule,
    MatStepperModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatProgressSpinnerModule,
    MatTableModule,
    // RouterModule.forChild(HomeRoutes)
    
   
  ]
})
export class HomeModule { }
