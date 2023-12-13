import { Component, OnInit } from '@angular/core';
import {Bloc} from "../../../../Models/Bloc";
import {BlocService} from "../../../services/bloc.service";


@Component({
  selector: 'app-update-bloc',
  templateUrl: './update-bloc.component.html',
  styleUrls: ['./update-bloc.component.scss']
})
export class UpdateBlocComponent implements OnInit {
  showUpdateBlocForm = false;
  blocs: Bloc[] = [];
  blocToUpdate: Bloc = new Bloc();

  constructor(private blocService: BlocService) {}

  ngOnInit(): void {
    this.blocService.getBlocs().subscribe(
      (data) => {
        console.log(data);
        this.blocs = data;
      }
    );
  }

  updateBloc(bloc: Bloc) {
    this.showUpdateBlocForm = true;
    this.blocToUpdate = bloc;
  }

  handleNotification(event: any) {
    this.showUpdateBlocForm = !this.showUpdateBlocForm;
  }
}
