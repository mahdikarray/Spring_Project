import { Component, Inject } from '@angular/core';
import { ChambreCardComponent } from '../chambre-card/chambre-card.component';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReservationService } from 'src/app/services/reservation.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmReservationDialogComponent } from '../confirm-reservation-dialog/confirm-reservation-dialog.component';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-chambre-list',
  templateUrl: './chambre-list.component.html',
  styleUrls: ['./chambre-list.component.scss']
})
export class ChambreListComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public chambres: any, private reservationService: ReservationService, private dialog: MatDialog) { }

  openDialog(chambre:any): void {

    this.dialog.open(ConfirmReservationDialogComponent, {
      data: chambre,
    });
  }


}
