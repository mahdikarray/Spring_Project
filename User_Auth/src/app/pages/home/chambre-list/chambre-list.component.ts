import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmReservationDialogComponent } from '../confirm-reservation-dialog/confirm-reservation-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

import { Chambre } from 'src/Models/Chambre';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.scss']
})
export class ChambreListComponent {

  chambres: any[] = [];

  constructor(private reservationService: ReservationService, private snackBarService: SnackBarService) { }

  ngOnInit(): void {
    this.reservationService.getChambres().subscribe({
      next: (data: Chambre[]) => {
        this.chambres = data;
      },
      error: (err: any) => console.log(err)
    });
  }

  emitChambreData(event: { cin: number, numeroChambre: number }) {
    console.log("here " + event.cin + " " + event.numeroChambre);
    this.reservationService.ajouterReservation(event.numeroChambre,event.cin).subscribe({
      next: (data: any) => {
        console.log(data);
        this.snackBarService.successMessage("Reservation effectuée avec succès", "OK");
      },
      error: (err: any) => {
        console.log(err);
        this.snackBarService.failMessage("Echec de reservation \"pas de place disponible\"", "OK");
      }
    });
  }



}
