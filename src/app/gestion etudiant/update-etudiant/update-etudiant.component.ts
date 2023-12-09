import { Component,OnInit } from '@angular/core';
import { Etudiant } from 'src/app/models/etudiant';
import { EtudiantService } from 'src/app/services/etudiant.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-update-etudiant',
  templateUrl: './update-etudiant.component.html',
  styleUrls: ['./update-etudiant.component.scss']
})
export class UpdateEtudiantComponent {
  constructor(private service:EtudiantService,
    private route: ActivatedRoute,
   ){}
     
    Etudiant: any;
    idInput:string='';

   
    trouver(){
    const id = Number(this.idInput);
      
      // Fetch data by id from the service
      this.service.getEtudiantById(id).subscribe((result) => {
        this.Etudiant = result;
        console.log(result);
      });
    }
   // test form values yetkraw wale before updating 
  show(u:Etudiant){
    console.log('Form value:', u);
  
  }
    onSubmit(u:Etudiant){
      const id = Number(this.idInput);
            this.service.updateEtudiant(u,id).subscribe();
           
            alert('Etudiant '+id+' bien modifié')
   
  }
}
