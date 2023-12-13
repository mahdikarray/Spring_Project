import { Component, Input, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-chambre-card',
  templateUrl: './chambre-card.component.html',
  styleUrls: ['./chambre-card.component.scss']
})
export class ChambreCardComponent {
  constructor(private userService:UserService) { }
  @Input() chambreData:any;
  @Output() chambreOutput=new EventEmitter<{cin:number,numeroChambre:number}>();
  
  ngOnInit(): void {
    console.log(this.chambreData);
  }

  emitChambreData(numeroChambre:number){
    let connectedUser = this.userService.getLoggedUser();
    this.chambreOutput.emit({cin:connectedUser.cin, numeroChambre: numeroChambre});
  }

}
