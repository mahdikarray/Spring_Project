import { Routes } from '@angular/router';

// ui
import { AppBadgeComponent } from './badge/badge.component';
import { AppChipsComponent } from './chips/chips.component';
import { AppListsComponent } from './lists/lists.component';
import { AppMenuComponent } from './menu/menu.component';
import { AppTooltipsComponent } from './tooltips/tooltips.component';
import { UniversiteDataComponent } from './universite-data/universite-data.component';
import { UniversiteAjoutComponent } from './universite-ajout/universite-ajout.component';
import { UniversiteUpdateComponent } from './universite-update/universite-update.component';
import { ChambreComponent } from './chambre/chambre.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { AppDashboardComponent } from '../dashboard/dashboard.component';


import {FoyerListComponent} from "./foyer-list/foyer-list.component";

export const UiComponentsRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard',
        component: AppDashboardComponent
      },
      {
        path: 'universite',
        component: UniversiteDataComponent,
      },
      {
        path: 'adduniversite',
        component: UniversiteAjoutComponent,
      },
      {
        path: 'update/:idUniversite',
        component: UniversiteUpdateComponent,
      },
      {
        path: 'Foyer',
        loadChildren: () =>
          import('./foyer/foyer.module').then(
            (m) => m.FoyerModule
          ),
      },

      {
        path: 'chambre',
        loadChildren: () =>
          import('./ChambreRoute/Chambre.module').then(
            (m) => m.ChambreModule
          ),
      },
      {
        path: 'bloc',
        loadChildren: () =>
          import('./blocmodule/blocmodule.module').then(
            (m) => m.BlocmoduleModule
          ),
      },
      {
        path: 'reservation',
        component: ReservationListComponent,
      },

      { path: '', redirectTo: 'reservation', pathMatch: 'full' },
    ],

  },
];
