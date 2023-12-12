import { Component, Inject } from '@angular/core';
import { UniversiteService } from 'src/app/services/universite.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Universite } from 'src/Models/Universite';
import { Foyer } from 'src/Models/Foyer';
import { FoyerService } from 'src/app/services/foyer.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';
@Component({
  selector: 'app-affecter-foyer-auniversite',
  templateUrl: './affecter-foyer-auniversite.component.html',
  styleUrls: ['./affecter-foyer-auniversite.component.scss']
})
export class AffecterFoyerAUniversiteComponent {

  displayedColumns: string[] = ['nomFoyer', 'capacite', 'actions'];
  dataSource: any;
  currentUniversite: Universite;
  ListFoyer: Foyer[] = [];

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private univService: UniversiteService, private foyerService: FoyerService, private snackBar: SnackBarService) { }

  ngOnInit() {


    this.foyerService.getFoyer().subscribe({
      next: (data: any) => {
        console.log(this.data);
        this.currentUniversite = this.data;
        this.ListFoyer = data;
        this.dataSource = data;
      },
      error: (err) => console.log(err)
    })
  }

  /*affecterFoyerAUniversite(idFoyer: any) {

    this.univService.affecterfoyerauniversite(idFoyer, this.currentUniversite.nomUniversite || '').subscribe({
      next: (data) => {
        this.snackBar.successMessage("Foyer affecté avec succés", "close");
        console.log(data)
      },
      error: (err) => {
        this.snackBar.failMessage("Foyer non affecté", "close");
        console.log(err)
      }
    })

  }*/

  alreadyAffecter(foyer: Foyer): Boolean {
    if (this.data.foyer == null)
      return false;
    return this.data.foyer.idFoyer === foyer.idFoyer;
  }


}
