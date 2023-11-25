import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {FoyerService} from "../Service/foyer.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Foyer} from "../model/Foyer";
import {Bloc} from "../model/Bloc";
import {Universite} from "../model/Universite";
import {UniversiteService} from "../Service/universite.service";
import {BlocService} from "../Service/bloc.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-foyer-update',
  templateUrl: './foyer-update.component.html',
  styleUrls: ['./foyer-update.component.css']
})
export class FoyerUpdateComponent implements OnInit {
  @Input() foyer: Foyer = new Foyer();
  @Output() updateUser = new EventEmitter();

  universites: Universite[] = [];
  blocs: Bloc[] = [];
  selectedBlocs: Bloc[][] = [[]];

  constructor(
    private s: FoyerService,
    private ac: ActivatedRoute,
    private router: Router,
    private u: UniversiteService,
    private b: BlocService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.loadUniversites();
    this.loadBlocs();

    const foyerId = this.ac.snapshot.params['id'];

    if (foyerId) {
      this.s.getFoyerById(foyerId).subscribe(
        (data) => {
          this.foyer = data;

          // Initialize selectedBlocs with an array containing an empty array
          this.selectedBlocs = [this.foyer.bloc || []];
        }
      );
    }
  }

  update(updateUser: any): void {
    const idUniversite = this.foyer.universite.idUniversite;
    const idBloc: number[] = this.selectedBlocs.flatMap((blocs) => blocs.map((bloc) => bloc.idBloc));

    const associatedMessage = `The selected Université or bloc might be associated with other data. Are you sure you want to update?`;

    const snackBarRef = this.snackBar.open(associatedMessage, 'Update', {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      const updatedFoyer = {
        ...this.foyer,
        bloc: this.selectedBlocs[0], // Assuming you are only using the first dropdown for bloc selection
      };

      // Use this.foy.idFoyer instead of this.ac.snapshot.params['id']
      this.s.updateFoyerWithAssociations(
        updateUser,
        this.foyer.idFoyer,
        idUniversite,
        idBloc
      ).subscribe(
        () => {
          this.showSnackBar('Modification effectuée');
          this.updateUser.emit(updateUser);
          this.router.navigate(['/Foyer']);
        },
        (error) => {
          console.error('Failed to update and associate with university and bloc:', error);
          this.showSnackBar('Failed to update and associate with university and bloc');
        }
      );
    });
  }

  private loadUniversites(): void {
    this.u.getUniversite().subscribe(
      (data) => {
        this.universites = data;
      }
    );
  }

  private loadBlocs(): void {
    this.b.getBlocs().subscribe(
      (data) => {
        this.blocs = data;
      }
    );
  }

  addDropdown(): void {
    this.selectedBlocs.push([]);
  }

  removeDropdown(index: number): void {
    this.selectedBlocs.splice(index, 1);
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
