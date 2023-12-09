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
import { AddBlocComponent } from './gestion bloc/add-bloc/add-bloc.component';
import { DeleteBlocComponent } from './gestion bloc/delete-bloc/delete-bloc.component';
import { BlocComponent } from './gestion bloc/bloc/bloc.component';
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
      {path:'Foyer',component:FoyerListComponent},
      {path:'Foyer/add',component:FoyerAddComponent},
      {path:'Foyer/:id',component:FoyerUpdateComponent},
      { path: 'Foyer/delete/:id', component: FoyerDeleteComponent },
      {path:'etudiant',component:AllEtudiantComponent},
      {path:"update-etudiant", component:UpdateEtudiantComponent},
      {path:"add-etudiant", component:AddEtudiantComponent},
      {path:"delete-etudiant", component:DeleteEtudiantComponent},
      {path:"Bloc",component:BlocComponent},
      {path:"Bloc/add", component:AddBlocComponent},
      {path:"Bloc/delete", component:DeleteBlocComponent}

    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
