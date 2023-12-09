import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';
@Component({
  selector: 'app-all-etudiant',
  templateUrl: './all-etudiant.component.html',
  styleUrls: ['./all-etudiant.component.scss']
})
export class AllEtudiantComponent implements OnInit {
  Etudiants: Etudiant[] = [];
  updatingEtudiantId: number | null = null;
  search = '';
  Etudiant: any;
  constructor(private service: EtudiantService) {}
  ngOnInit(): void {
    this.getall();
  }
   getall(){this.service.getEtudiantList().subscribe((Etudiants) => {
    console.log('La liste des étudiants:', Etudiants);
    this.Etudiants = Etudiants;
  });
 }
    /*
  supprimer() {
    this.service.getEtudiantById(id).subscribe(
      (result) => {
        this.Etudiant = result;
          this.service.removeEtudiant(id).subscribe(
            () => {
              alert('Etudiant bien supprimé');
            },
            (error) => {
              console.error('Erreur de suppression:', error);
              alert('Erreur de suppression');
            }
          );},
      (error) => {
        console.error('Etudiant non existant.', error);
        alert('Etudiant non existant.');
      }
    );
  }
  update(Etudiant: Etudiant): void {
    console.log('Selected Etudiant:', Etudiant);
    this.updatingEtudiantId = Etudiant.idEtudiant;
  }

  onEtudiantUpdateSuccess(EtudiantId: number): void {
    // Clear updating state for the specific Etudiant
    if (this.updatingEtudiantId === EtudiantId) {
      this.updatingEtudiantId = null;
    }
    this.getall(); // Refresh the list when an update is successful
  }

  isUpdating(EtudiantId: number): boolean {
    // Check if the specific Etudiant is updating
    return this.updatingEtudiantId === EtudiantId;
  }

  traitemenet(t: any): void {
    // Clear updating state
    this.updatingEtudiantId = null;
  }*/
}
