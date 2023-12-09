import { Component,OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
  import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-delete-etudiant',
  templateUrl: './delete-etudiant.component.html',
 
})
export class DeleteEtudiantComponent {
  constructor(private service:EtudiantService
   ){}

   Etudiant: any;
  idInput:string='';

  supprimer() {
    const id = Number(this.idInput);
  
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
  
    
   }
     
      