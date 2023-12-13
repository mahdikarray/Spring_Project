import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, Validators, FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserService } from 'src/app/services/user.service';
import { MatDialogModule } from '@angular/material/dialog';
import { ReviewProfileComponent } from '../review-profile/review-profile.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.scss']
})
export class ProfileFormComponent {


  addEducationEnabled: boolean = false;
  anotherSchoolEnabled: boolean = false;
  espritSchoolsEnabled: boolean = false;
  keepSpinning: boolean = true;
  userInfo: any = {
    "firstName": "",
    "lastName": "",
    "email": "",
    "phone": "",
    "streetAddress": "",
    "postalCode": "",
    "city": ""
  };

  ecoles = [
    "Esprit Buisiness",
    "Esprit Ecole Ingénieur",
  ];
  progressForm = 0;
  isLinear = true;

  selectedLink = 0;
  navLinks = [
    "Find jobs",
    "Company reviews",
    "Find salaries"
  ];


  @ViewChild(MatStepper, { static: false }) stepper!: MatStepper;


  userForm: FormGroup;

  currentYear: number = new Date().getFullYear();

  startYear: number = 1923;

  years: number[] = [];


  months: string[] = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];


  options: string[] = [
    'Esprit Prepa 1st year',
    'Esprit Prepa 2st year',
    'Esprit Engineering 3 A',
    'Esprit Engineering 3 B',

    'Esprit Engineering 4 eme TWIN(Technologie web)',
    'Esprit Engineering 4 eme SE (Genie Logiciel)',
    'Esprit Engineering 4 eme IA (inteligence artificielle)',
    'Esprit Engineering 4 eme SLEAM',
    'Esprit Engineering 4 eme SIM (mobile)',
    'Esprit Engineering 4 eme Artic (cloud)',
    'Esprit Engineering 4 eme BI (buisiness intelligence)',

    'Esprit Engineering 5 eme TWIN(Technologie web)',
    'Esprit Engineering 5 eme SE (Genie Logiciel)',
    'Esprit Engineering 5 eme IA (inteligence artificielle)',
    'Esprit Engineering 5 eme SLEAM',
    'Esprit Engineering 5 eme SIM (mobile)',
    'Esprit Engineering 5 eme Artic (cloud)',
    'Esprit Engineering 5 eme BI (buisiness intelligence)',

    'Esprit Business licence',
    'Esprit Business master',

  ];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.userInfo = JSON.parse(localStorage.getItem('user') || '{}');
    this.userForm = this._formBuilder.group({
      nomEt: [this.userInfo.nomEt, Validators.required],
      prenomEt: [this.userInfo.prenomEt, Validators.required],
      email: [this.userInfo.user.email, [Validators.required, Validators.pattern("^([a-zA-Z0-9_\\-\\.]+)@([a-zA-Z0-9_\\-]+)(\\.[a-zA-Z]{2,5}){1,2}$")]],
      cin: [this.userInfo.cin, [Validators.required, Validators.pattern("^[0-9]{8}$")]],
      numeroTelephone: [this.userInfo.numeroTelephone, [Validators.required, Validators.pattern("^[0-9]{8}$")]],
      adresse: [this.userInfo.adresse, Validators.required],
      codePostal: [this.userInfo.codePostal, [Validators.required, Validators.pattern("^[0-9]{4}$")]],
      ville: [this.userInfo.ville, Validators.required],
      ecole: [this.userInfo.ecole, Validators.required],
      specialite: [this.userInfo.specialite, Validators.required]
    });

    this.filteredOptions = this.userForm.get("specialite")!.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );

  }
  constructor(private _formBuilder: FormBuilder, private http: HttpClient, private userService: UserService,private dialog: MatDialog,private router:Router) { }


  selectLink(index: number) {
    this.selectedLink = index;
  }

  updateProgress(value: number) {
    this.progressForm += value;
  }

  addEducationPage() {
    this.addEducationEnabled = true;
    this.stepper.next();
  }

  addEducation() {

    this.anotherSchoolEnabled = false;
  }

  enableAnotherSchool(enable: boolean) {
    this.anotherSchoolEnabled = enable;
  }

  enableEspritSchools(enable: boolean) {
    this.espritSchoolsEnabled = enable;
  }


  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }



  file: any = null;

  onFileSelected(event: any): any {
    this.keepSpinning = true;

    this.file = event.target.files[0];
    if (!this.file || this.file.type !== 'application/pdf') {
      this.file = null;
      return null;
    }

    const formData = new FormData();
    formData.append('resume', this.file);

    this.http.post<any>('http://localhost:3000/upload', formData).subscribe(
      file => {
        // Process the extracted data to fill form inputs programmatically
        console.log("here dude ", file.aiResponse.LLAMA);
        const regex = /(\}\s*)(\})*$/m;
        const result = file.aiResponse.LLAMA.replace(regex, (match: any, group1: any, group2: any) => {
          if (group2.length > 0) {
            return group1; // Remove extra curly braces
          } else {
            return match; // Keep original match
          }
        });
        console.log(result);

        const jsonObject = JSON.parse(result);
        console.log(jsonObject);

        this.userInfo = jsonObject;
        this.keepSpinning = false;
      },
      error => {
        console.error('Error while uploading PDF:', error);
        this.keepSpinning = false;
      }
    );
    return true;
  }

  updateProfile() {
    const email = this.userForm.value.email;
    const idEtudiant = this.userInfo.idEtudiant;
    let etudiantProfile = this.userForm.value;
    etudiantProfile.idEtudiant = idEtudiant;
    delete etudiantProfile.email;
    etudiantProfile.user = { idUser:this.userInfo.user.idUser, email: email };
    console.log(etudiantProfile);

    this.userService.updateEtudiantProfile(etudiantProfile).subscribe({
      next: (data) => {
        console.log(data);
        this.userInfo = data;
        this.keepSpinning = false;
        localStorage.setItem("user", JSON.stringify(data));
        this.router.navigate(['/main/home/profile']);
      }
    });

  }

  openDialog(): void {
    let data=this.userForm.value;
    this.dialog.open(ReviewProfileComponent, {
      data: data
    });
  }

}
