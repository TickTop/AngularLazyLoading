import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router:Router) { }
  setToken(token:string):void{
    localStorage.setItem('token',token);
  }
  getToken():string|null {
     return localStorage.getItem('token');
  }
  isLoggedIn(){
    return this.getToken()!==null;
  }
  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login({email, password}:any):Observable<any>{
    if(email==='richardm@gmail.com'&&password ==='richardm6688'){
      this.setToken('abcdefg');
      return of ({name: 'richard Meng',email:'rchardm@gmail.com'});
    }
    return throwError(new Error('Failed to login'));
  }
}
