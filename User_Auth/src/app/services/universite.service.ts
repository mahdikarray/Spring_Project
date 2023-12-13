import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Universite} from "../../Models/Universite";


@Injectable({
  providedIn: 'root'
})
export class UniversiteService {
  private baseUrl = 'http://localhost:8181/api/universites'; // Include the API endpoint


  constructor(private http: HttpClient) {}

  getUniversite() {
    return this.http.get<any[]>(`${this.baseUrl}/findAll`);
  }

  ajouterUniversite(universiteData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, universiteData);
  }

  DeleteUniversite(id: number): Observable<any> {

    return this.http.delete(`${this.baseUrl}/delete/` + id, { responseType: 'text' });
  }


  UpdateUniversite(id:number, body:Universite){
    return this.http.put(`{this.baseUrl}/update/`+id, body);
  }

  modifieruniversite(universite  : Universite){
    return this.http.put<any[]>(`${this.baseUrl}/universite/ModifierUniversite`,universite);
  }


  fetchUniversiteByid(id:any){
    return this.http.get(`${this.baseUrl}/update/` + id);
  }

  affecterfoyerauniversite(idFoyer : number,nomUniversite  : String){
    return this.http.put<any[]>(`${this.baseUrl}/universite/affecterfoyeruniversite/${idFoyer}/${nomUniversite}`,{});
  }

}
