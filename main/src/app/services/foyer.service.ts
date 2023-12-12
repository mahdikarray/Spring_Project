import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Foyer} from "../../Models/Foyer";

@Injectable({
  providedIn: 'root'
})
export class FoyerService {

  private baseUrl = 'http://localhost:8181/api/foyers'; // Include the API endpoint


  constructor(private http: HttpClient) {
  }

  getFoyer(): Observable<Foyer[]> {
    return this.http.get<Foyer[]>(`${this.baseUrl}/findAllF`);
  }

  getFoyerById(id: any): Observable<Foyer> {
    return this.http.get<Foyer>(`${this.baseUrl}/findAllF`)
  }

  deleteFoyerAndDesaffecterUniversite(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/DeleteFoyerAndDesaffecterUniversite/${id}`);
  }

 /* addFoyer(data: Foyer): Observable<Foyer> {
    return this.http.post<Foyer>(`${this.baseUrl}/addFoyer`, data);
  }

  updateFoyerId(data: any, id: any): Observable<Foyer> {
    return this.http.put<Foyer>(`${this.baseUrl}/UpdateFoyer/${id}`, data);
  }*/
  addFoyerAndAssociateUniversiteAndBloc(data: Foyer, universiteId: number, idBloc: number[]): Observable<Foyer> {
    const url = `${this.baseUrl}/ajouterFoyerEtAffecteUniversiteEtBloc/${universiteId}/${idBloc}`;
    return this.http.post<Foyer>(url, data);
  }
  updateFoyerWithAssociations(
    data: Foyer,
    id: number,
    idUniversite: number,
    idBloc: number[]
  ): Observable<Foyer> {
    // Construct the URL without joining idBloc
    const url = `${this.baseUrl}/UpdateFoyerWithAssociations/${id}/${idUniversite}/${idBloc}`;

    return this.http.put<Foyer>(url, data);
  }
  getFoyerByIdUnivers(idUniversite ?: number){
    return this.http.get<Foyer>(`${this.baseUrl}/getfoyersbyiduniversite/${idUniversite}`);
  }

}
