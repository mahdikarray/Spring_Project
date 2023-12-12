
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ChambreListComponent } from '../chambre-list/chambre-list.component';

@Component({
  selector: 'app-foyer-details',
  templateUrl: './foyer-details.component.html',
  styleUrls: ['./foyer-details.component.scss']
})
export class FoyerDetailsComponent {

  blocs: any;

  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog
  ) { }

  ngOnInit() {

    this.route.queryParamMap.subscribe(params => { 
      this.blocs = JSON.parse(params.get('blocs')|| '[]');
      console.log(this.blocs);
    });
  }

  openDialog(chambres:any): void {

    this.dialog.open(ChambreListComponent, {
      data: chambres,
    });
  }

}
