import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class AppSideRegisterComponent implements OnInit {


  myForm: FormGroup;

  constructor(private router: Router,
    private fb: FormBuilder,
    private userSer: UserService,
    private ac: ActivatedRoute) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.myForm = this.fb.group({
      nomEt: ['', [Validators.required,Validators.pattern("[a-zA-Z]+")]],
      prenomEt: ['', [Validators.required,Validators.pattern("[a-zA-Z]+")]],
      email: ['', [Validators.required,Validators.email]],
      cin: ['', [Validators.required]],
      dateNaissance: ['', [Validators.required]],
      password: ['', [Validators.required,Validators.minLength(8)]],
      confirmPwd: ['', [Validators.required,Validators.minLength(8)]],
    });
  }


  onSubmit() {
    const formData: any = this.myForm.value;
    console.log(this.myForm.value);
    let dateNaissance:Date = new Date(this.myForm.get("dateNaissance")?.value);
    formData.dateNaissance =  dateNaissance.toISOString().split('T')[0];
    formData.role = "ROLE_ETUDIANT";

    this.userSer.register(formData).subscribe(
      (response) => {
        console.log('User ajoutée avec succès:', response);
        this.router.navigate(['/authentication/login']);
      },
      (error) => {
        console.error('Erreur lors de l\'ajout de l\'user:', error);
      }
    );
  }






  //submit() {
  // console.log(this.form.value);
  //this.router.navigate(['/dashboard']);
  //}
}
