import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chambre-card',
  templateUrl: './chambre-card.component.html',
  styleUrls: ['./chambre-card.component.scss']
})
export class ChambreCardComponent {
  constructor() { }
  @Input() chambre:any;
}
