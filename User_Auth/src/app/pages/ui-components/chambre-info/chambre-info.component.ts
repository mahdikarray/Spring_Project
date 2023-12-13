import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-chambre-info',
  templateUrl: './chambre-info.component.html',
  styleUrls: ['./chambre-info.component.scss']
})
export class ChambreInfoComponent {
  @Input() chambre: any;
}
