import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// icons
import { TablerIconsModule } from 'angular-tabler-icons';
import * as TablerIcons from 'angular-tabler-icons/icons';

//Import all material modules
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Import Layouts
import { FullComponent } from './layouts/full/full.component';
import { BlankComponent } from './layouts/blank/blank.component';

// Vertical Layout
import { SidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { HeaderComponent } from './layouts/full/header/header.component';
import { BrandingComponent } from './layouts/full/sidebar/branding.component';
import { AppNavItemComponent } from './layouts/full/sidebar/nav-item/nav-item.component';
import {FoyerDeleteComponent} from "./gestion foyer/foyer-delete/foyer-delete.component";
import {FoyerUpdateComponent} from "./gestion foyer/foyer-update/foyer-update.component";
import {FoyerAddComponent} from "./gestion foyer/foyer-add/foyer-add.component";
import {FoyerListComponent} from "./gestion foyer/foyer-list/foyer-list.component";

import { AllEtudiantComponent } from './gestion etudiant/all-etudiant/all-etudiant.component';
import { AddEtudiantComponent } from './gestion etudiant/add-etudiant/add-etudiant.component';
import { DeleteEtudiantComponent } from './gestion etudiant/delete-etudiant/delete-etudiant.component';
import { UpdateEtudiantComponent } from './gestion etudiant/update-etudiant/update-etudiant.component';

@NgModule({
  declarations: [
    AppComponent,
    FullComponent,
    BlankComponent,
    SidebarComponent,
    HeaderComponent,
    BrandingComponent,
    AppNavItemComponent,
    FoyerListComponent,
    FoyerAddComponent,
    FoyerUpdateComponent,
    FoyerDeleteComponent,
    AllEtudiantComponent,
    AddEtudiantComponent,
    DeleteEtudiantComponent,
    UpdateEtudiantComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons)
  ],
  exports: [TablerIconsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
