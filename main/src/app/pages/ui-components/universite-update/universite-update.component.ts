import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Universite } from 'src/Models/Universite';
import { UniversiteService } from 'src/app/services/universite.service';
import { SnackBarService } from 'src/app/services/snack-bar.service';

@Component({
  selector: 'app-universite-update',
  templateUrl: './universite-update.component.html',
  styleUrls: ['./universite-update.component.scss']
})
export class UniversiteUpdateComponent implements OnInit {

  dataSource: Universite;
  myForm: FormGroup;
  id: number;
  constructor(private fb: FormBuilder, private univSer: UniversiteService, private ac: ActivatedRoute, private router: Router,private snackBar: SnackBarService) {


  }


  ngOnInit() {
   /* this.ac.params.subscribe(paramas => { this.id = paramas['idUniversite'] })
    console.log(this.id);
    this.initForm();
    this.univSer.getUniversite(this.id).subscribe(
      (data) => {
        this.remplissage(data)

      }
    )*/
  }


  remplissage(universite: Universite) {


    this.myForm.patchValue({
      idUniversite: universite.idUniversite,
      nomUniversite: universite.nomUniversite,
      adresse: universite.adress

    })


  }


  /*onSubmit() {
    if (this.myForm.valid) {
      this.myForm.value.idUniversite = this.id;
      console.log(this.myForm.value);
      this.univSer.modifieruniversite(this.myForm.value).subscribe({
        next: () => {
          this.snackBar.successMessage("Université modifiée avec succés", "close");
          this.router.navigate(['main/admin/ui-components/universite'])
        },
        error: (error) => {
          this.snackBar.failMessage("Université echoué", "close");
          console.error('Erreur lors de l\'ajout de l\'université:', error);
        }
      })

      // Process the form submission or data here
      console.log(this.myForm.value);
      // For example: you might want to send this data to a service or backend endpoint
    } else {
      // Mark fields as touched to trigger validation messages
      this.myForm.markAllAsTouched();
    }
  }*/

  initForm() {
    this.myForm = this.fb.group({

      nomUniversite: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
    });
  }
}
