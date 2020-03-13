import { Injectable } from '@angular/core';
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
  getToken() {
    return localStorage.getItem('token');
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  parseJWT() {
    const jwtHelper = new JwtHelperService();
    const objJWT = jwtHelper.decodeToken(this.jwt);
    this.username = objJWT.obj;
    this.roles = objJWT.roles;
    console.log(objJWT);
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }
  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    this.parseJWT();
  }

  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = undefined;
  }

  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this._router.navigate(['/login']);
    this.initParams();
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

}
