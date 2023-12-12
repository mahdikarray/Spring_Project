import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable,pipe,map,catchError,of } from 'rxjs';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationGuard implements CanActivate {
  constructor(private userService:UserService,private router:Router){
  }

   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return this.userService.verifyEtudiantToken(localStorage.getItem('token') || '').pipe(
      map(data => {
        console.log(data);
        return true;
      }),
      catchError(error => {
        console.log('Invalid token');
        this.router.navigate(['/authentication/login']);
        return of(false);
      })
    );
    }
}
