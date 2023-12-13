import { Routes } from '@angular/router';

import { HomePageComponent } from './home/home-page/home-page.component';

import { AppSideLoginComponent } from './authentication/login/login.component';
import { AppSideRegisterComponent } from './authentication/register/register.component';


import { AuthentificationGuard } from '../authentification.guard';
import { BlankComponent } from '../layouts/blank/blank.component';
import { FullComponent } from '../layouts/full/full.component';
import { AppDashboardComponent } from './dashboard/dashboard.component';
import { RoleGuard } from '../role.guard';



export const PagesRoutes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthentificationGuard, RoleGuard],
    data: { expectedRole: 'ROLE_ETUDIANT' },
  },

  {
    path: 'admin',
    component: FullComponent,
    children: [
      {
        path: 'ui-components',
        loadChildren: () =>
          import('./ui-components/ui-components.module').then(
            (m) => m.UicomponentsModule
          ),
      },
      { path: '', redirectTo: 'ui-components', pathMatch: 'full' } // Updated the redirection path
    ],
    canActivate: [AuthentificationGuard, RoleGuard],
    data: { expectedRole: 'ROLE_ADMIN' },
  },
  {
    path: '',
    redirectTo: '/authentication/login',
    pathMatch: 'full',
  },
];

// export const HomeRoutes: Routes = [
//   {
//     path: '',
//     component: HomePageComponent,
//     data: {
//       title: 'Home',
//     },
//   },

// ];


