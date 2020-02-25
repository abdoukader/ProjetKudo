import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-kudo-team',
  templateUrl: './kudo-team.page.html',
  styleUrls: ['./kudo-team.page.scss'],
})
export class KudoTeamPage implements OnInit {

  data: any=[];
  str: any=[];
  filterStr: any=[];
  filtered = false;
  selectedId = null;
 
  idk= this.actRoute.snapshot.params['id'];
  constructor(private kudos: InscriptionService, private alertController:AlertController, public actRoute: ActivatedRoute,private structureliste:InscriptionService) { }

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
  
  formKudo = {
    point:this.idk,
    nombeneficiaire:"",
    structure:"",
    commentaire:""
  }

  faireKudoTeam(){
    // const st = this.str.filter((s: any) => s.id === +this.selectedId);
    // if(this.selectedId === null || (st.length > 0 && st[0].sousStructure !== this.formKudo.structure)) {
    //     this.selectedId = null;
    //     return;
    // }
    this.formKudo.structure = this.selectedId;
    this.kudos.faireKudoTeam(this.formKudo)
    .subscribe(
      res => {
        this.presentAlertError()
        window.confirm('kudo team réussit');
        console.log(res)
      },
      err => {
        window.confirm('kudo team echoué')
        console.log(err)
      }
    )
    console.log(this.formKudo)
  }

  async presentAlertError(){
    const alert = await this.alertController.create({
      header: 'kudowall',
      subHeader: 'KUDO WALL',
      message: 'kudo team réussie',
      buttons: ['ok']
    })
    await alert.present();
  }

}
