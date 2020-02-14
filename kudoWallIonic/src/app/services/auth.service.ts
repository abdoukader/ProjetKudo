import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { from } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  [x: string]: any;

  jwt: string;
  username: string;
  roles: Array<string>;


 
  private _loginUrl = "http://localhost:8080/authenticate";


  constructor(private http: HttpClient, private _router: Router) { }

  loginUser(data) {
    return this.http.post<any>(this._loginUrl, data);
  }

  loggedIn() {
   
    return !!localStorage.getItem('token');
  }
  // methode de deconnexion

  logoutUser() {
    localStorage.removeItem('token');
    this._router.navigate(['/login']);
    this.initParams();
  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

  getToken() {
    return localStorage.getItem('token');
  }

  // gettoken() {
  //   return new Promise((resolve, reject) => {
  //       let headers = new Headers();
  //       headers.append('Authorization','token'),
  //         this.http.get(this._loginUrl+'token/auth',{})
  //         .subscribe(res => {
  //           console.log('ok');
  //         }, (err) => {
  //           reject(err);
  //         });
  //   });
  // }

  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  parseJWT() {
    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
    console.log(objJWT);
  }

  isAdmin() {
    return this.roles.indexOf('ROLE_ADMIN') >= 0;
  }

  isUser() {
    return this.roles.indexOf('ROLE_USER') >= 0;
  }
  isAuthenticated() {
    return this.roles && (this.isAdmin() || this.isUser() );
  }
  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }
  
}
