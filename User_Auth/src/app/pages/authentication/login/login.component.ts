import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/Models/User';
import { SnackBarService } from 'src/app/services/snack-bar.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class AppSideLoginComponent implements OnInit {
  myForm: FormGroup;


  constructor(private router: Router, private fb: FormBuilder, private userService: UserService, private ac: ActivatedRoute, private snackBar: SnackBarService) { }


  ngOnInit(): void {
    this.initForm();
    localStorage.clear();
  }


  initForm() {
    this.myForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],

    });
  }

  onSubmit() {
    const formData: User = this.myForm.value;
    console.log(formData);
    this.userService.login(formData).subscribe({
      next: (data) => {
        console.log(data);
        localStorage.setItem('token', data.token);
        delete data.user.user.password;
        localStorage.setItem('user', JSON.stringify(data.user));
        this.snackBar.successMessage("Login successful","close");
        if (data.user.user.role == "ROLE_ETUDIANT")
          this.router.navigate(['/main/home']);
        else if (data.user.user.role == "ROLE_ADMIN")
          this.router.navigate(['/main/admin']);
      },

      error: (error) => { 
        this.snackBar.failMessage("invalid credentials","close");
        console.log(error) 
      }
    });
  }



  /*

  data => {
    
    alert("Login successful");
      this.userSer.getrolebyusername(formData.username)
.subscribe({
  next: (role) => {
    
    console.log(role);
  }
  
});
 
    this.router.navigate(['/dashboard']);
  },
  error => {
    console.error("Login error", error);
    alert("Login failed");
  }
);*/




}
