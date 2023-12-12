import { Component , Input } from '@angular/core';
import { Universite } from 'src/Models/Universite';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universite-card',
  templateUrl: './universite-card.component.html',
  styleUrls: ['./universite-card.component.scss']
})
export class UniversiteCardComponent {
  
@Input() UniversiteInput ! : Universite;

constructor(private Univser : UniversiteService){}
}
