import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _auth: AuthService, private _router: Router,private alertController:AlertController ) { }

  ngOnInit() {
  }

  async presentAlertError() {
    const alert = await this.alertController.create({
      header: 'connexion reussie',
      subHeader: 'KUDOWALL',
      message: 'connexion non reussie',
      buttons: ['OK']
    });

    await alert.present();
  }

onLogin(data) {
    this._auth.loginUser(data)
    .subscribe(
      res => {
        this.presentAlertError();
      //Swal.fire('Authentification Réussie!!!')
      console.log(data);
         console.log(res);
        // tslint:disable-next-line: prefer-const
      let jwt = (res.token);
        // tslint:disable-next-line: align
        this._auth.saveToken(jwt);

        
      this._router.navigate(['/kudo']);
      },
       err => console.log(err)
    );
  }

 

  isAdmin() {
    return this._auth.isAdmin();
  }


  isUser() {
    return this._auth.isUser();
  }

}
