import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, Validators,FormGroup, ControlContainer } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor(private _auth: AuthService, private _router: Router,private alertController:AlertController,private formBuilder: FormBuilder ) { 
  }
 loginForm : FormGroup;
 isSubmitted = false;
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username : ['',[Validators.required]],
      password:['',[Validators.required]]
    });
  }
  ValidationMsg = {
  'username': [
    { type: 'required', message: 'Enter un username' },
  ],
  'password': [
    { type: 'required', message: 'Entrer un password' },
  ],
}

  async presentAlertError(message:string) {
    const alert = await this.alertController.create({
      message: message,
      buttons: [{text: 'OK'}]
    });

    await alert.present();
  }
 
onLogin() {
  this.isSubmitted = true;
  console.log(this.loginForm.value);
    this._auth.loginUser(this.loginForm.value)
    .subscribe(
      res => {
       //this.presentAlertError('Connexion réussie');
         console.log(res);
      let jwt = (res.token);
        this._auth.saveToken(jwt);
        this._router.navigate(['/choix-beneficiaire']);
      },
       error => {
        this.isSubmitted = false; 
         console.log(error.error)
         if(error.error.status === 401){
           this.presentAlertError('Erreur vérifier tous les champs');
         }
         else if(error.error.status===403){
          this.presentAlertError(error.error.message);
        }
      }
 
      );
      //this.loginForm.reset();

    }
  
 /* resetLoginForm(){
   let controlsObject = this.loginForm.controls;
   for (let prop in controlsObject){
     if(controlsObject.hasOwnProperty(prop)){
       console.log(controlsObject[prop]);
       (controlsObject[prop]).updateValue('');
     }
   }

  }*/

}