import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import {FoyerDeleteComponent} from "./gestion foyer/foyer-delete/foyer-delete.component";
import {FoyerUpdateComponent} from "./gestion foyer/foyer-update/foyer-update.component";
import {FoyerAddComponent} from "./gestion foyer/foyer-add/foyer-add.component";
import {FoyerListComponent} from "./gestion foyer/foyer-list/foyer-list.component";
import { AllEtudiantComponent } from './gestion etudiant/all-etudiant/all-etudiant.component';
import { AddEtudiantComponent } from './gestion etudiant/add-etudiant/add-etudiant.component';
import { DeleteEtudiantComponent } from './gestion etudiant/delete-etudiant/delete-etudiant.component';
import { UpdateEtudiantComponent } from './gestion etudiant/update-etudiant/update-etudiant.component';
const routes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/Foyer',
        pathMatch: 'full',
      },
      {
        path: 'Foyer',
        loadChildren: () =>
          import('../app/gestion foyer/foyer/foyer.module').then(
            (m) => m.FoyerModule
          ),
      },
      {path:'etudiant',component:AllEtudiantComponent},
      {path:"update-etudiant", component:UpdateEtudiantComponent},
      {path:"add-etudiant", component:AddEtudiantComponent},
      {path:"delete-etudiant", component:DeleteEtudiantComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
