import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Bloc} from "../../../../Models/Bloc";
import {BlocService} from "../../../services/bloc.service";

@Component({
  selector: 'app-updatebloc-input',
  templateUrl: './updatebloc-input.component.html',
  styleUrls: ['./updatebloc-input.component.scss']
})
export class UpdateblocInputComponent{
  @Input() bloc: Bloc = new Bloc();
  @Output() notification = new EventEmitter();

  constructor(private blocService: BlocService, private snackBar: MatSnackBar) {}
  updateBloc() {
    this.blocService.editBloc(this.bloc).subscribe(
      (data) => {
        console.log('Bloc updated successfully:', data);
        this.notification.emit('update-success');
        this.snackBar.open('Bloc modifié avec succès ', 'Fermer', {
          duration: 3000,  // Set the duration for the notification
          horizontalPosition: 'center',  // Optional: Set the horizontal position
          verticalPosition: 'top',
        });
      },
      (error) => {
        console.error('Error updating bloc:', error);
      }
    );
  }
}
