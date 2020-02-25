import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../services/inscription.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AutoCompleteService } from 'ionic4-auto-complete';
import { from } from 'rxjs';
import { NULL_EXPR } from '@angular/compiler/src/output/output_ast';
import { Router } from '@angular/router';


@Component({
    selector: 'app-inscription',
    templateUrl: './inscription.page.html',
    styleUrls: ['./inscription.page.scss'],
  })
  export class InscriptionPage implements OnInit {
    
    Data: any=[];
    structure: any=[];
    lStruc:any[];
    f: any; 
    str: any=[];
    filterStr: any=[];
    filtered = false;
    selectedId = null;

    constructor(private _router: Router,private inscrip: InscriptionService,private alertController:AlertController, private structureliste:InscriptionService ) { 
        
    }


    ngOnInit() {
        this.listeStructure()
    }
    listeStructure(){
        this.structureliste.listeStructure().subscribe(
            rep=> {
                this.str=rep
                this.filterStr = this.str;
                console.log(rep);
            },err=>console.log(err)
        );
    }
    filterStructure(e: any) {
        const val = e.value.toLowerCase();
        this.filterStr = this.str.filter((s: any) => {
            return s.sousStructure.toLowerCase().indexOf(val) > -1;
        })
        console.log(this.filterStr);
    }

    selectStr(input: any, id: number, nom: string) {
        input.value = nom;
        this.selectedId = id;
        this.filtered = false;
    }
    
    inscription(Data){
        // const st = this.str.filter((s: any) => s.id === +this.selectedId);
        // if(this.selectedId === null || (st.length > 0 && st[0].sousStructure !== Data.value.structure)) {
        //     this.selectedId = null;
        //     return;
        // }
        Data.value.structure = this.selectedId;
        this.inscrip.inscription(Data.value)
        .subscribe(
            res => {
                this.presentAlertError()
                console.log(res);
                this._router.navigate(['/login']);
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
        await alert.present();
    }

}