import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  detail:any;
  detailUs: any;
  
  constructor(private util: InscriptionService,private formGroup: FormBuilder,private authService: InscriptionService) { }

  ngOnInit() {
    //console.log(this.util.selectUser);
    //this.detail=this.listerUsers();
    this.detail=this.util.selectUser;
  }
  detailVainqueur = this.formGroup.group({
    debut: [''],
    fin: ['']
  })
   listerUsers(){
  
    this.util.listerUser()
    .subscribe(
      res => {
        console.log(res)
        this.detail=res;
      },
      err => {
        console.log(err)
      }
    )
  }
  listeStructure(){
    this.util.listeStructure()
    .subscribe(
      res =>{
        console.log(res)
        this.detail=res;
      },
      err =>{
      console.log(err);
      
      }
    )
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

}
