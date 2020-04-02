import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../../services/inscription.service';
import { HttpClient } from 'selenium-webdriver/http';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
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

    inscriptionForm : FormGroup;
    isSubmitted = false;
    Data: any=[];
    structure: any=[];
    lStruc:any[];
    f: any; 
    str: any=[];
    filterStr: any=[];
    filtered = false;
    selectedId = null;
    isenabled:boolean=false;

    constructor(private formBuilder: FormBuilder,private _router: Router,
        private inscrip: InscriptionService,
        private alertController:AlertController, 
        private structureliste:InscriptionService) { 
        
    }
    ValidationMsg = {
        'email': [
            { type: 'required', message: 'L\'email est obligatoire' },
            { type: 'minlength', message: 'Vous devez remplir au moins 5 caracteres' },
            { type: 'pattern', message: 'Rentrer un email valide' }
          ],
        'nom': [
          { type: 'required', message: 'Le nom est obligatoire' },
          { type: 'minlength(5)', message: 'Vous devez remplir au moins 5 caracteres' },
          { type: 'pattern', message: 'Rentrer un nom valide' }
        ],
        'username': [
            { type: 'required', message: 'Le username est obligatoire' },
            { type: 'minlength', message: 'Vous devez remplir au moins 5 caracteres' },
            { type: 'pattern', message: 'Rentrer un username valide' }
          ],
          'password': [
            { type: 'required', message: 'Le password est obligatoire' },
            { type: 'minlength', message: 'Vous devez remplir au moins 5 caracteres' },
            { type: 'pattern', message: 'Rentrer un nom valide' }
          ],
        'structure':[
          { type: 'required', message:'La structure est obligatoire' },
        ],
        'telephone': [
            { type: 'required', message: 'Le numéro de téléphone est obligatoire' },
            { type: 'minlength', message: 'Vous devez remplir au moins 5 caracteres' },
            { type: 'pattern', message: 'Rentrer un numéro de téléphone valide' }
          ],
      
    }
    initForm(){
        this.inscriptionForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
            nom: ['', [Validators.required, Validators.minLength(2), Validators.pattern(/[a-z-A-Z]/)]],
            username : ['',[Validators.required,Validators.minLength(2), Validators.pattern(/[a-z0-9-A-Z]/)]],
            password:['',[Validators.required,Validators.minLength(2), Validators.pattern(/[a-z0-9-A-Z]/)]],
            structure:['',[Validators.required]],
            telephone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
        });
    }
 
    ngOnInit(){
        this.listeStructure();
        this.initForm();
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
    
    /*inscription(Data){
        Data.value.structure = this.selectedId;
        this.inscrip.inscription(Data.value)
        .subscribe(
            res => {
                this.presentAlertError(res.msg)
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
*/

    inscription(){
        this.isSubmitted = true;
        this.inscriptionForm.value.structure = this.selectedId;
        this.inscrip.inscription(this.inscriptionForm.value)
        .subscribe(
            res => {
                this.presentAlertError(res.msg);
                console.log(res);
                if(res){   
                this._router.navigate(['/login']);
                }
             
            },
            error=> {
                console.log(error);
                if(error.msg==error.error.msgErreur1)
                this.presentAlertError(error.msgErreur1);
                else if(error.msg==error.msgErreur2) 
                this.presentAlertError(error.msgErreur2)
                else if(error.msg==error.msgErreur3)
                this.presentAlertError(error.msgErreur3)
                this._router.navigate(['/inscription']);
            }
        );
        this.inscriptionForm.reset();
    }

    test(){
        this.inscrip.FindBySousStructure(this.structure.value)
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
    async presentAlertError(message:string) {
        const alert = await this.alertController.create({
          message: message,
          buttons: [{text: 'OK'}]
        });
    
        await alert.present();
      }

  }
