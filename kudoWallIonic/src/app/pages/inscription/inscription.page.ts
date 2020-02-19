import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../services/inscription.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { from } from 'rxjs';


@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.page.html',
    styleUrls: ['./inscription.page.scss'],
  })
  export class InscriptionPage implements OnInit {
    
    Data: any=[];
    structure: any;
    f: any; 

    constructor(private inscrip: InscriptionService,private alertController:AlertController) { 
        this.initializationData();
    }

    FilterJsonData(ev:any)
    {
        this.initializationData();
        const val = ev.target.value;
        if(val && val.trim() != '')
        {
            this.Data = this.Data.filter((item)=>{
                return (item.sousStructure.toLowerCase().indexOf(val.toLowerCase())>-1);
            })
        }
    }
    selectVal(val)
    {
        alert("you have select = "+val);
    }

    initializationData()
    {
        this.Data = [
            {
                "id": 1,
                "departement": "DSI/DAC",
                "lieu": "NSIA",
                "sousStructure": "COE"
            },
            {
                "id": 2,
                "departement": "DSI/DAC",
                "lieu": "NSIA",
                "sousStructure": "DIF"
            },
            {
                "id": 3,
                "departement": "DSI/DAC",
                "lieu": "NSIA",
                "sousStructure": "CES"
            },
            {
                "id": 4,
                "departement": "DSI/DAC",
                "lieu": "SABLUX",
                "sousStructure": "SMC"
            },
            {
                "id": 5,
                "departement": "DSI/DAC",
                "lieu": "SABLUX",
                "sousStructure": "EAI"
            },
            {
                "id": 6,
                "departement": "DSI/DAC",
                "lieu": "SABLUX",
                "sousStructure": "2AI"
            },
            {
                "id": 7,
                "departement": "DSI/DAC",
                "lieu": "SABLUX",
                "sousStructure": "INS"
            },
            {
                "id": 8,
                "departement": "DSI/DAC",
                "lieu": "SABLUX",
                "sousStructure": "APS"
            },
            {
                "id": 9,
                "departement": "DSI/DAC",
                "lieu": "SABLUX",
                "sousStructure": "ILAB"
            },
            {
                "id": 10,
                "departement": "DSI/DAC",
                "lieu": "SABLUX",
                "sousStructure": "OCIO"
            },
            {
                "id": 11,
                "departement": "DSI/DAC",
                "lieu": "SABLUX",
                "sousStructure": "CSPS"
            },

        ]
    }

    ngOnInit() {
        // this.f= new NgForm({
        //     structure: new name('', [
        //         Validators.required
        //     ])
        // })
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

    test(){
        this.inscrip.FindBySousStructure(this.f)
        .subscribe(
            res => {
                this.structure= res

                console.log(this.structure)
            },
            err=> {
                console.log(err);
            }
        );
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