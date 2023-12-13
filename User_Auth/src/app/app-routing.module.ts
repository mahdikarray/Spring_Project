import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { HomePageComponent } from './pages/home/home-page/home-page.component';
import { AuthentificationGuard } from './authentification.guard';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  {
    path:"main",
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
    //canActivate: [AuthentificationGuard]
  },
  {
    path: '',
    redirectTo: '/authentication/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component: BlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren: () =>
          import('./pages/authentication/authentication.module').then(
            (m) => m.AuthenticationModule
          ),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
