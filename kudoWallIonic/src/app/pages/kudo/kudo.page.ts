import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router'

@Component({
  selector: 'app-kudo',
  templateUrl: './kudo.page.html',
  styleUrls: ['./kudo.page.scss'],
})
export class KudoPage implements OnInit {

  data: any=[];
 
  idk= this.actRoute.snapshot.params['id'];
  constructor(private kudos: InscriptionService, private alertController:AlertController, public actRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }
  
  formKudo = {
    point:this.idk,
    nombeneficiaire:"",
    commentaire:""
  }

  fairekudo(){
    this.kudos.faireKudo(this.formKudo)
    .subscribe(
      res => {
        this.presentAlertError()
        window.confirm('kudo réussit');
        console.log(res)
      },
      err => {
        window.confirm('kudo echoué')
        console.log(err)
      }
    )
    console.log(this.formKudo)
  }

  async presentAlertError(){
    const alert = await this.alertController.create({
      header: 'kudowall',
      subHeader: 'KUDO WALL',
      message: 'kudo réussie',
      buttons: ['ok']
    })
    
  }
}
