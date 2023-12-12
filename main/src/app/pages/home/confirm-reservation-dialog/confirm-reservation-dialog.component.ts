import { Component, Inject } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';
import { info } from 'sass';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-confirm-reservation-dialog',
  templateUrl: './confirm-reservation-dialog.component.html',
  styleUrls: ['./confirm-reservation-dialog.component.scss']
})
export class ConfirmReservationDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public chambre: any, private reservationService: ReservationService, public dialogRef: MatDialogRef<ConfirmReservationDialogComponent>,private snackBar:SnackBarService) { }

  ajouterReservation(numChambre: number) {
    let user = JSON.parse(localStorage.getItem('user') || '{}');
    this.reservationService.ajouterReservation(numChambre, user.cin).subscribe({

      next: (data) => {
        console.log(data);
        this.snackBar.successMessage("Reservation ajoutée avec succés","close");
      },
      error: (err) => {
        this.snackBar.failMessage("Reservation echoué","close");
        console.log(err);
      }
    }
    );
  }
}
