import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foyer } from 'src/Models/Foyer';
import { Universite } from 'src/Models/Universite';
import { FoyerService } from 'src/app/services/foyer.service';
import { UniversiteService } from 'src/app/services/universite.service';

@Component({
  selector: 'app-universitie-list',
  templateUrl: './universitie-list.component.html',
  styleUrls: ['./universitie-list.component.scss']
})
export class UniversitieListComponent {
  ListFoyer : Foyer[] = [];
  filteredFoyers: Foyer[] = [];
  searchTerm: string = '';
  ListUniv : any[]=[];
  foyerparuni  :Foyer;
  showFoyerCard: boolean = false;
  selectedUniversityId: number | null = null;


  constructor(private _foyerService : FoyerService , private Univser : UniversiteService , private route : Router){}




  ngOnInit(): void {
    this._foyerService.getFoyer().subscribe({
      next : (data)=>
      {
        this.ListFoyer = data;
        this.filteredFoyers = data;
        console.log(this.ListFoyer);
      }
    })

    this.Univser.getUniversite().subscribe({
      next : (data)=> this.ListUniv=data
    })



  }

  // Function to filter foyers based on the search term
  searchFoyers() {
    this.filteredFoyers = this.ListFoyer.filter(foyer => {
      return foyer.nomFoyer.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  }




 toggleFoyerCard(universityId?: number) {
    if (universityId === undefined || this.selectedUniversityId === universityId) {
      this.selectedUniversityId = null; // Close the displayed foyer card if the same button is clicked again or if universityId is undefined
    } else {
      this.selectedUniversityId = universityId; // Show foyer card for the selected university
    }
  }

  navigateToDetails(bloc: any) {

    console.log(bloc);
    this.route.navigate(['main/home/details-foyer'], { queryParams: { bloc: JSON.stringify(bloc) } });
  }

}
