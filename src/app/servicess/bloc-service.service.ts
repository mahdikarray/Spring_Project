import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloc } from '../modelss/Bloc';
import { ɵTypedOrUntyped, ɵElement, ɵFormGroupValue } from '@angular/forms';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlocServiceService {
  private baseUrl='http://localhost:8182/api/blocs';
  constructor(private http: HttpClient){
    console.log('${this.baseUrl}')
  }
  
  
    getBloc(): Observable<Bloc[]> {
      return this.http.get<Bloc[]>(`${this.baseUrl}/findAll`);
    }
  
    
    getBlocById(id: any): Observable<Bloc> {
      return this.http.get<Bloc>(`${this.baseUrl}/findById/${id}`);
    }
    
    removeBloc(id: any) {
      return this.http.delete(`${this.baseUrl}/deleteByID/${id}`);
    }
    
    addBloc(data: Bloc): Observable<Bloc> {
      return this.http.post<Bloc>(`${this.baseUrl}/addBloc`, data);
    }
    
    updateBloc(data: ɵTypedOrUntyped<{ [K in keyof { nomBloc: string[]; capaciteBloc: string[] }]: ɵElement<{ nomBloc: string[]; capaciteBloc: string[] }[K], null> }, ɵFormGroupValue<{ [K in keyof { nomBloc: string[]; capaciteBloc: string[] }]: ɵElement<{ nomBloc: string[]; capaciteBloc: string[] }[K], null> }>, any>, id: any): Observable<Bloc> {
      return this.http.put<Bloc>(`${this.baseUrl}/editBloc/${id}`, data);
    }
  
    affecterChambreABloc(numeros: number[], nomBloc: string): Observable<Bloc> {
      const data = { numeros };
      return this.http.put<Bloc>(`${this.baseUrl}/affecterChambreABloc/${nomBloc}`, data);
    }
    affecterBlocAFoyer(nomBloc: string, nomFoyer: string): Observable<Bloc> {
      const data = { nomBloc, nomFoyer };
      return this.http.put(`${this.baseUrl}/affecterBlocFoyer/${encodeURIComponent(nomBloc)}/${encodeURIComponent(nomFoyer)}`, data)
        .pipe(
          map((response: any) => {
            return response as Bloc;
          })
        );
    }
    
  }
  
  