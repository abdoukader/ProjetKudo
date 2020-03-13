import { Component, OnInit } from '@angular/core';
//import { IonicPage } from '@ionic/angular';
import { NavController, NavParams, BooleanValueAccessor } from '@ionic/angular';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionService } from '../services/inscription.service';



//@IonicPage()

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {
  detailUs: any;
  vainq: Boolean;

  constructor(private formGroup: FormBuilder, private router : Router, private authService: InscriptionService){}

  ngOnInit() {
  }
  detailVainqueur = this.formGroup.group({
    debut: [''],
    fin: ['']
  })


  detailU (data:any){
    console.log(data);
      this.authService.listeUtilisateur(this.detailVainqueur.value)
      .subscribe(
        data =>{
          console.log(data);
          this.detailUs=data
          
        },err=>{
          console.log(err);
          
        }
      )
    
  }
}
