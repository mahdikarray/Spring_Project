import { Component , Inject} from '@angular/core';
import { Bloc } from 'src/Models/Bloc';
import { Chambre } from 'src/Models/Chambre';
import { BlocService } from 'src/app/services/bloc.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-affecter-chambre-abloc',
  templateUrl: './affecter-chambre-abloc.component.html',
  styleUrls: ['./affecter-chambre-abloc.component.scss']
})
export class AffecterChambreABlocComponent {
  displayedColumns: string[] = ['nomBloc', 'capaciteBloc', 'actions'];

  dataSource: any;
  currentChambre: Chambre;
  ListBloc: Bloc[] = [];
  constructor(@Inject(MAT_DIALOG_DATA) public data: any  ,private blocService : BlocService,private snackBar:SnackBarService){}

  ngOnInit(){
    this.blocService.getBlocs().subscribe({
      next:(data)=> {
        this.currentChambre=this.data
        this.dataSource = data
        this.ListBloc= data
      }
    })
  }


  alreadyAffecter(bloc : any){

    console.log(bloc);
    return bloc.chambres.filter((chambre: Chambre) => chambre.idChambre === this.currentChambre.idChambre).length === 0;
  }

  /*affecterchambreabloc(nomBloc : string){

    console.log(nomBloc);
      this.blocService.getBlocs(nomBloc,Number.parseInt(this.currentChambre.numeroChambre)).subscribe(
        (data) => {
          console.log(data);
          this.snackBar.successMessage("chambre affecter avec succés","close");
        },
        (error) => {
          this.snackBar.failMessage("chambre non affecter","close");
          console.log(error);
        }

      )
  }
*/
}
