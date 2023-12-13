import { Component } from '@angular/core';
import { ReservationService } from 'src/app/services/reservation.service';
import { UserService } from 'src/app/services/user.service';





@Component({
  selector: 'app-reservations-status',
  templateUrl: './reservations-status.component.html',
  styleUrls: ['./reservations-status.component.scss']
})



export class ReservationsStatusComponent {
  dataSource :any[]=[];
  loggedUser:any;
  constructor(private reservationService : ReservationService,private userService:UserService) { }

  ngOnInit(): void {
    this.loggedUser=this.userService.getLoggedUser();
    console.log(this.loggedUser);
    this.reservationService.getReservations().subscribe((reservations:any) => {
      this.dataSource = reservations.filter( (r:any) => r.etudiant.user.idUser == this.loggedUser.user.idUser);
    });
  }
  displayedColumns: string[] = ['numeroChambre', 'typeChambre', 'status'];

}
