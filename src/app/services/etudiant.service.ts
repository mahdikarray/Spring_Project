import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { Etudiant } from '../models/etudiant';
@Injectable({
  providedIn: 'root'
})
export class EtudiantService {

 
  
  baseUrl = "http://localhost:8088/Etudiants/addEtudiant";
  Url="http://localhost:8088/Etudiants/"
  constructor(private http:HttpClient) { }


  addEtudiant(data:Etudiant):Observable<Etudiant>{
    return this.http.post<Etudiant>(this.baseUrl,data);
  }


  getEtudiantById(id:number):Observable<any>{
    const url = `${this. Url}getbyid/${id}`;
    return this.http.get(url);
      }
      

      updateEtudiant(updatedEtudiant:Etudiant,id: number): Observable<Etudiant> {
        const url = `${this.Url}updateEtudiant/${id}`;
        return this.http.put<Etudiant>(url , updatedEtudiant);
      }

      removeEtudiant(id:number){
        const url = `${this.Url}deletebyid/${id}`;
        return this.http.delete(url)
          }

          getEtudiantList():Observable<Etudiant[]>{
            const url = `${this.Url}getEtudiants`;
            return this.http.get<Etudiant[]>(url);
          }
      }  
     



 
 
  
 



