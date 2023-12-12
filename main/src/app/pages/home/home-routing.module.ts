import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReservationCardComponent } from './reservation-card/reservation-card.component';
import { HomePageComponent } from './home-page/home-page.component';
import { FoyerCardComponent } from './foyer-card/foyer-card.component';
import { FoyerDetailsComponent } from './foyer-details/foyer-details.component';
import { UniversitieListComponent } from './universitie-list/universitie-list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReservationsStatusComponent } from './reservations-status/reservations-status.component';



export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      {
        path: '',
        redirectTo: 'universite-list',
        pathMatch: 'full'
      },
      {
        path: 'universite-list',
        component: UniversitieListComponent
      },
      {
        path: 'reservation',
        component: ReservationCardComponent
      },
      {
        path: 'foyer',
        component: FoyerCardComponent
      },
      {
        path: 'details-foyer',
        component: FoyerDetailsComponent
      },
      {
        path: 'profile',
        component: UserProfileComponent
      },
      {
        path: 'profile-form',
        component: ProfileFormComponent
      },
      {
        path: 'reservations-status',
        component: ReservationsStatusComponent
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class HomeRoutingModule { }
