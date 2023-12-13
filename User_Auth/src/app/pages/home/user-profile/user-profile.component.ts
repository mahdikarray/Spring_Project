import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  etudiant: any;

  constructor() {  }
  ngOnInit(): void {

    this.etudiant = JSON.parse(localStorage.getItem('user') || '{}');
  }
}
