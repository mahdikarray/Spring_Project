import { Component, OnInit } from '@angular/core';
import { Bloc } from 'src/app/modelss/Bloc';
import { BlocServiceService } from 'src/app/servicess/bloc-service.service';
import { ChambreServiceService } from 'src/app/servicess/chambre-service.service';

@Component({
  selector: 'app-bloc',
  templateUrl: './bloc.component.html',
  styleUrls: ['./bloc.component.scss']
})
export class BlocComponent implements OnInit {
  blocs!: Bloc[];
  blocsWithChambres: any[] = [];

  constructor(
    private blocService: BlocServiceService,
    private chambreService: ChambreServiceService
  ) {}

  ngOnInit(): void {
    this.blocService.getBloc().subscribe(
      (blocs: Bloc[]) => {
        this.blocs = blocs;
        this.loadChambresForBlocs();
      }
    );
  }
  

  loadChambresForBlocs() {
    this.blocs.forEach(bloc => {
      this.chambreService.searchChambresByBloc(bloc.idBloc).subscribe(
        (chambres: any[]) => {
          this.blocsWithChambres.push({
            bloc: bloc,
            chambres: chambres
          });
        }
      );
    });
  }
}