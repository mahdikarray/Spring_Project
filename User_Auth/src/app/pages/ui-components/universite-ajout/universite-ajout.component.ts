import { UniversiteService } from 'src/app/services/universite.service';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Universite } from 'src/Models/Universite';
import { ActivatedRoute, Router } from '@angular/router';

import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-universite-ajout',
  templateUrl: './universite-ajout.component.html',
  styleUrls: ['./universite-ajout.component.scss']
})
export class UniversiteAjoutComponent {

  myForm: FormGroup = this.fb.group({

    nomUniversite: ['', [Validators.required]],
    adresse: ['', [Validators.required]],
  });
  id: number = 0;

  constructor(private fb: FormBuilder, private univSer: UniversiteService, private ac: ActivatedRoute, private router: Router,private snackBar: SnackBarService) {


  }






  onSubmit() {



    if (this.myForm.valid) {
      const formData: Universite = this.myForm.value;
      console.log(formData);


      this.univSer.ajouterUniversite(formData).subscribe(
        (response) => {
          console.log('Université ajoutée avec succès:', response);
          this.snackBar.successMessage("Université ajoutée avec succés","close");
          this.router.navigate(['main/admin/ui-components/universite'])
        },
        (error) => {
          this.snackBar.failMessage("Université echoué","close");
          console.error('Erreur lors de l\'ajout de l\'université:', error);

        }
      );
    }


  }




}
