import {Component, OnInit} from '@angular/core';

import {MatSnackBar} from "@angular/material/snack-bar";
import {Foyer} from "../../models/Foyer";
import {FoyerService} from "../../services/foyer.service";

@Component({
  selector: 'app-foyer-list',
  templateUrl: './foyer-list.component.html',
  styleUrls: ['./foyer-list.component.css']
})
export class FoyerListComponent implements OnInit {
  foyers: Foyer[] = [];
  search = '';
  usertoSelected!: Foyer;
  show = false;

  constructor(private foyerservice: FoyerService, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.foyerservice.getFoyer().subscribe((d) => {
      this.foyers = d;
    });
  }

  deleteFoyerById(id: number): void {
    const snackBarRef = this.snackBar.open('Are you sure you want to delete this foyer?', 'Delete', {
      duration: 5000,
    });

    snackBarRef.onAction().subscribe(() => {
      this.foyerservice.deleteFoyerAndDesaffecterUniversite(id).subscribe(
        () => {
          this.foyers = this.foyers.filter((foyer) => foyer.idFoyer !== id);
          this.showSnackBar('Foyer deleted successfully');
        },
        (error) => {
          console.error('Failed to delete foyer:', error);
          this.showSnackBar('Failed to delete foyer');
        }
      );
    });
  }

  private showSnackBar(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  update(foyer: Foyer) {
    console.log('Selected Foyer:', foyer);
    this.usertoSelected = foyer;
    this.show = true;
  }

  changeTab(e: any) {
    this.show = false;
    for (let i = 0; i < this.foyers.length; i++) {
      if (this.foyers[i].idFoyer == e.id) {
        this.foyers[i] = e;
      }
    }
  }
}
