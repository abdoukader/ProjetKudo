import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-vainqueur',
  templateUrl: './vainqueur.page.html',
  styleUrls: ['./vainqueur.page.scss'],
})
export class VainqueurPage implements OnInit {

  detailVs: any;
  vainq: Boolean;
  public classement: FormGroup;

  constructor(private formGroup: FormBuilder, private router : Router, private authService: InscriptionService){}

  ngOnInit() {
  }
  detailvainqueur = this.formGroup.group({
    debut: [''],
    fin: ['']
  })
  usersV(){
    this.vainq = true;
  }

  detailV (data:any){
    console.log(data);
    console.log(this.detailvainqueur);
    
      this.authService.listeUtilisateurV(this.detailvainqueur.value)
      .subscribe(
        data =>{
          console.log(data);
          this.detailVs=data
          
        },err=>{
          console.log(err);
          
        }
      )
    
  }
  goToView(detail: any){
    this.authService.selectUser = detail;
    this.router.navigateByUrl('/detail');   
    } 

}

