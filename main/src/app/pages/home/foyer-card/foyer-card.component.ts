import { Component, Input, OnInit } from '@angular/core';
import { Foyer } from 'src/Models/Foyer';
import { FoyerService } from 'src/app/services/foyer.service';

@Component({
  selector: 'app-foyer-card',
  templateUrl: './foyer-card.component.html',
  styleUrls: ['./foyer-card.component.scss']
})
export class FoyerCardComponent {
  @Input() universiteId?: number;

  foyerInput: Foyer | undefined; // Define foyerInput as potentially undefined

  constructor(private _foyerService: FoyerService) {}

  ngOnInit(): void {
    if (this.universiteId !== undefined) {
      // Utilize the service to fetch foyer details based on the university ID
      this._foyerService.getFoyerByIdUnivers(this.universiteId).subscribe((data) => {
        this.foyerInput = data;
        // Perform additional actions with the foyer details if needed
      });
    }
  }


}
