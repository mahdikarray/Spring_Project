import { Component } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';;

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss']
})
export class ReservationCardComponent {

  offers: any[] = [];
  pageSize = 5;
  currentPage = 0;
  paginatedOffers: any[] = [];
  totalOffers = 0;
  isMobile = false;
  selectedDiv!: number;
  currentOffer: any = null;

  // String nomBloc;
  // long capaciteBloc;
  // long numeroChambre;
  // TypeChambre Typec;

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver,
    private router: Router
  ) {
    this.selectedDiv = 0;
    this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.Tablet]) // You can add more breakpoints if needed
    .subscribe((result) => {
      this.isMobile = result.matches;
    });
  }

  
  ngOnInit(): void {
    console.log('OfferComponent');

    this.offers = [
      { title: 'Jr JavaScript Developer', company: 'PrimePay, LLC', location: 'Remote', salary: '$90,000 - $100,000', rating: 4 },
      { title: 'Offer 2', company: 'Company 2', location: 'Remote', salary: '$30,000 - $50,000', rating: 3 },
      { title: 'Offer 3', company: 'Company 3', location: 'Remote', salary: '$30,000 - $30,000', rating: 5 },
      { title: 'Offer 4', company: 'Company 4', location: 'Remote', salary: '$20,000 - $900,000', rating: 2 },
      { title: 'Offer 5', company: 'Company 5', location: 'Remote', salary: '$90,000 - $100,000', rating: 1 },
      { title: 'Offer 6', company: 'Company 6', location: 'Remote', salary: '$90,000 - $100,000', rating: 3 },
      { title: 'Offer 7', company: 'Company 7', location: 'Remote', salary: '$90,000 - $100,000', rating: 5 },
      { title: 'Offer 8', company: 'Company 8', location: 'Remote', salary: '$90,000 - $100,000', rating: 2 },
      { title: 'Offer 9', company: 'Company 9', location: 'Remote', salary: '$90,000 - $100,000', rating: 4 },
      { title: 'Offer 10', company: 'Company 10', location: 'Remote', salary: '$90,000 - $100,000', rating: 3 },
      { title: 'Offer 11', company: 'Company 11', location: 'Remote', salary: '$90,000 - $100,000', rating: 5 },
      { title: 'Offer 12', company: 'Company 12', location: 'Remote', salary: '$90,000 - $100,000', rating: 2 },
      { title: 'Offer 13', company: 'Company 13', location: 'Remote', salary: '$90,000 - $100,000', rating: 4 },
      { title: 'Offer 14', company: 'Company 14', location: 'Remote', salary: '$90,000 - $100,000', rating: 3 },
      { title: 'Offer 15', company: 'Company 15', location: 'Remote', salary: '$90,000 - $100,000', rating: 5 },
      { title: 'Offer 16', company: 'Company 16', location: 'Remote', salary: '$90,000 - $100,000', rating: 2 },
      { title: 'Offer 17', company: 'Company 17', location: 'Remote', salary: '$90,000 - $100,000', rating: 4 },
      { title: 'Offer 18', company: 'Company 18', location: 'Remote', salary: '$90,000 - $100,000', rating: 3 },
      { title: 'Offer 19', company: 'Company 19', location: 'Remote', salary: '$90,000 - $100,000', rating: 5 },
      { title: 'Offer 20', company: 'Company 20', location: 'Remote', salary: '$90,000 - $100,000', rating: 2 },
      { title: 'Offer 21', company: 'Company 21', location: 'Remote', salary: '$90,000 - $100,000', rating: 4 },
      { title: 'Offer 22', company: 'Company 22', location: 'Remote', salary: '$90,000 - $100,000', rating: 3 },
      { title: 'Offer 23', company: 'Company 23', location: 'Remote', salary: '$90,000 - $100,000', rating: 5 },
      { title: 'Offer 24', company: 'Company 24', location: 'Remote', salary: '$90,000 - $100,000', rating: 2 },
      { title: 'Offer 25', company: 'Company 25', location: 'Remote', salary: '$90,000 - $100,000', rating: 4 },
      { title: 'Offer 26', company: 'Company 26', location: 'Remote', salary: '$90,000 - $100,000', rating: 3 },
      { title: 'Offer 27', company: 'Company 27', location: 'Remote', salary: '$90,000 - $100,000', rating: 5 },
      { title: 'Offer 28', company: 'Company 28', location: 'Remote', salary: '$90,000 - $100,000', rating: 2 },
      { title: 'Offer 29', company: 'Company 29', location: 'Remote', salary: '$90,000 - $100,000', rating: 4 },
      { title: 'Offer 30', company: 'Company 30', location: 'Remote', salary: '$90,000 - $100,000', rating: 3 },
      { title: 'Offer 31', company: 'Company 31', location: 'Remote', salary: '$90,000 - $100,000', rating: 5 }
    ];
    this.currentOffer = this.offers[this.selectedDiv];
    this.totalOffers = this.offers.length;
    this.updatePagination();
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(ReservationCardComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  closeDialog(): void {
    const dialogRef = this.dialog.open(ReservationCardComponent);
    dialogRef.close();
  }


  updatePagination() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.paginatedOffers = this.offers.slice(startIndex, endIndex);
  }

  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
    this.selectedDiv = this.currentPage * this.pageSize;
    this.currentOffer = this.offers[this.selectedDiv];
    this.updatePagination();
  }

  onSelectDiv(index: number) {
    this.currentOffer = this.offers[index + this.currentPage * this.pageSize];
    this.selectedDiv = index + this.currentPage * this.pageSize;
  }

  offerClick(index: number) {
    if (this.isMobile) {
      this.router.navigate(['/offer-mobile']);
      // this.router.navigate(['/offer-mobile', 3]); // the id of the offer is 3
    }
  }


}

