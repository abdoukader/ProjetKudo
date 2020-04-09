import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { InscriptionService } from './inscription.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private injector: Injector) { }

  intercept(req, next) {

    const authService = this.injector.get(AuthService);
    // tslint:disable-next-line: prefer-const
    const tokenizedReq = req.clone({
      setHeaders: {
        Authorization: 'Bearer '+ authService.getToken(),
        'Content-Type':'application/json'
        
      }
    });
    return next.handle(tokenizedReq);
  }
}
