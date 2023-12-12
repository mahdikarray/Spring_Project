import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {BrowserModule} from "@angular/platform-browser";

import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TablerIconsModule} from "angular-tabler-icons";
import * as TablerIcons from "angular-tabler-icons/icons";
import {MatPaginatorModule} from "@angular/material/paginator";
import {ChambreComponent} from "../chambre/chambre.component";
import {AddChambreComponent} from "../add-chambre/add-chambre.component";
import {DeleteChambreComponent} from "../delete-chambre/delete-chambre.component";
import {UpdateChambreComponent} from "../update-chambre/update-chambre.component";

import {ChambreRoutingModule} from "./Chambre-routing.module";
import {UpdateInputComponent} from "../update-input/update-input.component";
import { ChambredirectiveDirective} from "../ChambreDirective/chambredirective.directive";
import {MaterialModule} from "../../../material.module";


@NgModule({
  declarations: [
      ChambreComponent,
      AddChambreComponent,
      DeleteChambreComponent,
      UpdateChambreComponent,
    UpdateInputComponent,
      ChambredirectiveDirective

  ],
  imports: [
    CommonModule,
    ChambreRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    TablerIconsModule.pick(TablerIcons),
    MatPaginatorModule,
    MaterialModule
  ],
})
export class ChambreModule {}
