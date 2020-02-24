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
      header: 'BIENVENUE',
      subHeader: 'KUDOWALL',
      message: 'connexion reussie',
      buttons: ['OK']
    });

    await alert.present();
  }

onLogin(data) {
    this._auth.loginUser(data)
    .subscribe(
      res => {
        this.presentAlertError();
      console.log(data);
      console.log(res);
      let jwt = (res.token);
      this._auth.saveToken(jwt);
      this._router.navigate(['/typeKudo']);
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
