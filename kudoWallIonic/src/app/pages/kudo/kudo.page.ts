import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-kudo',
  templateUrl: './kudo.page.html',
  styleUrls: ['./kudo.page.scss'],
})
export class KudoPage implements OnInit {

  data: any=[];


  constructor(private kudos: InscriptionService, private alertController:AlertController) { }

  ngOnInit() {
  }

  fairekudo(data){
    this.kudos.faireKudo(data)
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
    console.log(data)
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
