import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router'; import { Reservation } from 'src/Models/Reservation';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';
import { FormControl } from '@angular/forms';
import { TypeChambre } from 'src/Models/TypeChambre';
import { BlocService } from 'src/app/services/bloc.service';
import { forkJoin, map } from 'rxjs';
import { SnackBarService } from 'src/app/services/snack-bar.service';


@Component({
  selector: 'app-reservation-list',
  templateUrl: './reservation-list.component.html',
  styleUrls: ['./reservation-list.component.scss']
})
export class ReservationListComponent {

  reservations: any[] = [];
  filteredReservations: any[] = [];
  oldResults: any[] = [];

  pageSize = 5;
  currentPage = 0;
  paginatedReservations: any[] = [];
  totalReservations = 0;
  isMobile = false;
  selectedDiv!: number;
  currentReservation: any = null;
  chambreSearchTerms = new FormControl('');
  etudiantSearchTerms = new FormControl('');
  capaciteBloc: string = '';
  typeChambre: string = '';
  etatReservation: string = '';
  // String nomBloc;
  // long capaciteBloc;
  // long numeroChambre;
  // TypeChambre Typec;

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private router: Router,
    private reservationService: ReservationService,
    private blocService: BlocService,
    private userService: UserService,
    private snackBar: SnackBarService
  ) {
    this.selectedDiv = 0;
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Tablet])
      .subscribe((result) => {
        this.isMobile = result.matches;
      });
  }




  ngOnInit(): void {
    this.reservationService.getReservations().subscribe((reservations) => {
      this.reservations = reservations;
      console.log(this.reservations);
      this.oldResults = reservations;
      this.currentReservation = this.reservations[0];
      this.updatePagination();
    });
  }


  performSearch() {
    // Create a copy of the original reservations
    let filteredReservations = [...this.oldResults];

    // Filter based on "numero chambre" and "nom bloc"
    if (this.chambreSearchTerms.value !== '') {
      const chambreSearchTerm = this.chambreSearchTerms.value!.toLowerCase();
      filteredReservations = filteredReservations.filter(reservation =>
        reservation.chambre.numeroChambre.toString().toLowerCase().includes(chambreSearchTerm)
      );
    }

    // Filter based on "etudiant"
    if (this.etudiantSearchTerms.value !== '') {
      const etudiantSearchTerm = this.etudiantSearchTerms.value!.toLowerCase();
      console.log(etudiantSearchTerm);
      filteredReservations = filteredReservations.filter(reservation =>
        reservation.etudiant.nomEt.toLowerCase().includes(etudiantSearchTerm) ||
        reservation.etudiant.prenomEt.toLowerCase().includes(etudiantSearchTerm) ||
        reservation.etudiant.cin.toString().toLowerCase().includes(etudiantSearchTerm)
      );
    }

    // Filter based on "capaciteBloc"
    if (this.capaciteBloc !== '') {
      filteredReservations = filteredReservations.filter(reservation =>
        reservation.chambre.bloc.capaciteBloc.toString().toLowerCase().includes(this.capaciteBloc)
      );
    }

    // Filter based on "typeChambre"
    if (this.typeChambre !== '') {
      filteredReservations = filteredReservations.filter(reservation =>
        reservation.chambre.typeChambre.toLowerCase().includes(this.typeChambre.toLowerCase())
      );
    }

    // Filter based on "etatReservation"
    if (this.etatReservation !== '') {
      filteredReservations = filteredReservations.filter(reservation =>
        reservation.statuReservation.toLowerCase().includes(this.etatReservation)
      );
    }

    // If no search terms for "chambre" and "etudiant" are provided, reset the results
    if (this.etudiantSearchTerms.value === '' && this.chambreSearchTerms.value === '') {
      this.typeChambre = '';
      this.etatReservation = '';
      this.capaciteBloc = '';
    }

    this.reservations = filteredReservations;
    console.log(this.reservations);
    this.updatePagination();
  }


  setTypeChambre(typeChambre: string) {
    this.typeChambre = typeChambre;
  }

  setStatus(etatReservation: string) {
    this.etatReservation = etatReservation;
  }

  setCapaciteBloc(capaciteBloc: string) {
    this.capaciteBloc = capaciteBloc;
  }

  ajouterReservation(numChambre: number, cin: number) {
    this.reservationService.ajouterReservation(numChambre, cin).subscribe((data) => {
      console.log(data);
    });
  }
  openDialog(): void {
    //const dialogRef = this.dialog.open();

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  closeDialog(): void {
    // const dialogRef = this.dialog.open(ReservationCardComponent);
    // dialogRef.close();
  }


  updatePagination() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedReservations = this.reservations.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.selectedDiv = this.currentPage * this.pageSize;
    this.currentReservation = this.reservations[this.selectedDiv];
    this.updatePagination();
  }

  onSelectDiv(index: number) {
    this.currentReservation = this.reservations[index + this.currentPage * this.pageSize];
    this.selectedDiv = index + this.currentPage * this.pageSize;
  }

  offerClick(index: number) {
    if (this.isMobile) {
      this.router.navigate(['/reservation-mobile/3']);
    }
  }

  validateReservation(idReservation: string) {
    this.reservationService.validateReservationByid(idReservation).subscribe({

      next: (data) => {
        console.log(data);
        this.snackBar.successMessage("Reservation validée avec succés", "close");
      },
      error: (err) => {
        console.log(err);
        this.snackBar.failMessage("Reservation echoué", "close");
      }
    });
  }

  refuseReservationByid(idReservation: string) {
    this.reservationService.refuseReservationByid(idReservation).subscribe({
      next: (data) => {
        console.log(data);
        this.snackBar.successMessage("Reservation refusée avec succés", "close");
      },
      error: (err) => {
        console.log(err);
        this.snackBar.failMessage("Reservation echoué", "close");
      }
    });
  }


}
