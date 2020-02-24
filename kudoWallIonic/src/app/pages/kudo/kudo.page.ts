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

  fairekudo(){
    // const st = this.str.filter((s: any) => s.id === +this.selectedId);
    // if(this.selectedId === null || (st.length > 0 && st[0].sousStructure !== this.formKudo.structure)) {
    //     this.selectedId = null;
    //     return;
    // }
    this.formKudo.structure = this.selectedId;
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
    await alert.present();
  }
}
