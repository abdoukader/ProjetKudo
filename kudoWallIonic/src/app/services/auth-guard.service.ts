import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { Storage } from '@ionic/storage';
import { AuthService } from './auth.service';

@Injectable({  

  providedIn: 'root'
})
@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private router:Router,
    private storage: Storage,
    private authService: AuthService) {

     }
     canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      if(!this.authService.isAuthenticated){
        return true;
      }
      else{
        this.router.navigateByUrl('login')
      return false;
      }
      }

}
