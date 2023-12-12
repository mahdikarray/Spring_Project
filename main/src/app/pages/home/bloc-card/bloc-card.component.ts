import { I } from '@angular/cdk/keycodes';
import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-bloc-card',
  templateUrl: './bloc-card.component.html',
  styleUrls: ['./bloc-card.component.scss']
})
export class BlocCardComponent {

  @Input() bloc:any;
}
