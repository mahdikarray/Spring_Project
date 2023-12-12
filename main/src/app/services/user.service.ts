import { HttpClient, HttpInterceptor, HttpHandler, HttpRequest, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpHeaders } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:8181';
  constructor(private http: HttpClient) { }


  register(userData: any): Observable<string> {
    return this.http.post(`${this.baseUrl}/auth/addEtudiant`, userData, { responseType: 'text' });
  }

  login(user: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/generateToken`, user, { responseType: 'json' });
  }


  getLoggedUser(): any {
    return JSON.parse(localStorage.getItem("user") || "{}");
  }


  _is_logged(): boolean {
    return !!localStorage.getItem("token");
  }

  verifyEtudiantToken(token: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/auth/validateToken`, {token:token}, { responseType: 'json' });
  }

  getRole(role: String) {
    let user;
    let localStorageData=localStorage.getItem("user");
    if(localStorageData != null){
      user = JSON.parse(localStorageData);
    }
    if (user.role == role)
      return true;
    return false
  }

  getUserProfile(id: string): Observable<any> {
    return this.http.get<{ formation: any }>(`${this.baseUrl}/userProfile?id=${id}`, { responseType: "json" });
  }

  public createUserProfile(userProfile: any) {
    return this.http.post<{ message: any }>(`${this.baseUrl}/userProfile`, userProfile)
  }

  public updateEtudiantProfile(userProfile: any) {
    return this.http.put<{ message: any }>(`${this.baseUrl}/etudiant/updateEtudiant`, userProfile)
  }

  fetchFile(fileUrl: string): Observable<Blob> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/pdf' });
    return this.http.get(fileUrl, { responseType: 'blob', headers });
  }


}
