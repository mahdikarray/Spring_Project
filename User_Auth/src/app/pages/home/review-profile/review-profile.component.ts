import { Component,Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-review-profile',
  templateUrl: './review-profile.component.html',
  styleUrls: ['./review-profile.component.scss']
})
export class ReviewProfileComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any){}
}
