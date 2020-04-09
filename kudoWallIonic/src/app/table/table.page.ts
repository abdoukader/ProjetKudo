import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.page.html',
  styleUrls: ['./table.page.scss'],
})
export class TablePage implements OnInit {

  detailUs: any;
  vainq: Boolean;
  public classement: FormGroup;

  constructor(private formGroup: FormBuilder, private router : Router, private authService: InscriptionService){}

  ngOnInit() {
  }
  detailVainqueur = this.formGroup.group({
    debut: [''],
    fin: ['']
  })
  userss(){
    this.vainq = true;
  }

  detailU (data:any){
    console.log(data);
    console.log(this.detailVainqueur);
    
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
  goToView(detail: any){
    this.authService.selectUser = detail;
    this.router.navigateByUrl('/detail');   
    } 

}
