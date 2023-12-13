import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileFormComponent } from './profile-form/profile-form.component';
import { ReservationsStatusComponent } from './reservations-status/reservations-status.component';
import { ChambreListComponent } from './chambre-list/chambre-list.component';



export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [

      {
        path: '',
        redirectTo: 'chambre-list',
        pathMatch: 'full'
      },
      {
        path: 'chambre-list',
        component: ChambreListComponent
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
