import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-kudo',
  templateUrl: './kudo.page.html',
  styleUrls: ['./kudo.page.scss'],
})
export class KudoPage implements OnInit {

  detail: any;
  str: any=[];
  filterStr: any=[];
  filtered = false;
  filteredd = false;
  filter = false;
  selectedId = null;
  selectedNom = null;
  errorMsg: any=[];
  lis: any=[];
  filterU: any=[];
  msg=""
  idk= this.actRoute.snapshot.params['id'];

  constructor(private kudos: InscriptionService, private alertController:AlertController,
              private alertControl:AlertController, public actRoute: ActivatedRoute, private _router: Router,
              private structureliste:InscriptionService, private listeU:InscriptionService) { }

  ngOnInit() {
    this.listeStructure()
    this.listeUsers()
  }

  listeStructure(){
    this.structureliste.listeStructure()
    .subscribe(
          res=> {
            this.str=res
            this.filterStr = this.str;
            console.log(res);
        },err=>
        console.log(err)  
    );
   
  }

  selectStr(input: any, id: number, nom: string) {
    input.value = nom;
    this.selectedId = id;
    console.log(this.selectedId);
    this.filtered = false;
}

  filterStructure(e: any) {
    const val = e.value.toLowerCase();
    this.filterStr = this.str.filter((s: any) => {
        return s.sousStructure.toLowerCase().indexOf(val) > -1;
    })
    console.log(this.filterStr);
  }

  listeUsers(){
    this.listeU.listerUser().subscribe(
        rep => {
            this.lis=rep
            this.filterU = this.lis;
            console.log(rep);
        },err => console.log(err)
    )
  }

filterUtilisateur(e:any){
  const val = e.value.toLowerCase();
  this.filterU = this.lis.filter((l:any) =>{
      return l.nom.toLowerCase().indexOf(val) > -1;
  })
  console.log(this.filterU);
  
}

 selectliste(input: any, nom: string){
    input.value = nom;
    this.selectedNom =nom;
    this.filteredd =false;

  }
  
formKudo = {
  point:this.idk,
  nombeneficiaire:"",
  structure:"",
  commentaire:""
}
 

fairekudo(){
  this.formKudo.structure = this.selectedId;
  this.kudos.faireKudo(this.formKudo)
  .subscribe(
    res => {
      this.presentAlertError(res.msg)
      this._router.navigate(['/kudowall-structure/'+this.selectedId]);
     // window.confirm('kudo réussit');
      console.log(res)
      
    },
    err => {
      //window.confirm('kudo echoué')
      console.log(err)
    }
  )
  console.log(this.formKudo)
}

  async presentAlertSucces(){
    const alerts = await this.alertController.create({
      header: 'kudowall',
      subHeader: 'KUDO WALL',
      message: 'kudo réussie',
       buttons: ['ok']
    })
    await alerts.present();
  }
  async presentAlertError(msg){
    const alert = await this.alertControl.create({
      subHeader: 'KUDO WALL',
      message: msg,
       buttons: ['ok']
    })
    await alert.present();
  }
}
