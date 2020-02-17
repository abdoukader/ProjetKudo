import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../services/inscription.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';


@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.page.html',
    styleUrls: ['./inscription.page.scss'],
  })
  export class InscriptionPage implements OnInit {
    
    Data: any={};

    constructor(private inscrip: InscriptionService,private alertController:AlertController) { }

    ngOnInit(){

    }
    inscription(Data){
        this.inscrip.inscription(Data)
        .subscribe(
            res => {
                this.presentAlertError()
                window.confirm('inscription réussie');
                console.log(res);
            },
            err=> {
                window.confirm('inscription echouée')
                console.log(err);
            }
        );
        console.log(Data);
    }

    async presentAlertError() {
        const alert = await this.alertController.create({
          header: 'inscription',
          subHeader: 'KUDO WALL',
          message: 'inscription reussie',
          buttons: ['OK']
        
        });
    return alert;
    }
}