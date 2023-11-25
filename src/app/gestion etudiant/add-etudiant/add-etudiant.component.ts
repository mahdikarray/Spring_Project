import { Component } from '@angular/core';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { Etudiant } from 'src/app/models/etudiant';

@Component({
  selector: 'app-add-etudiant',
  templateUrl: './add-etudiant.component.html',
  styleUrls: ['./add-etudiant.component.scss']
})
export class AddEtudiantComponent {
  constructor(private EtudiantService: EtudiantService) {}

  Etudiant=new Etudiant()
  showForm(f:any){
  console.log(f)
}

// testing
show(u:Etudiant){
  console.log('Form value:', u);

}
// ajouter
saveEtudiant(u:Etudiant){
this.EtudiantService.addEtudiant(u).subscribe(
  (response) => {
   
    console.log('Response from server:', response);
    alert('etudiant ajouté');
  },
  (error) => {
    console.error('Error adding Etudiant:', error);}
);
;
}
}
