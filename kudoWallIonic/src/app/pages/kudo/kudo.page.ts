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
  constructor(private kudos: InscriptionService, private _router:Router,private alertController:AlertController,private alertControl:AlertController, public actRoute: ActivatedRoute,private structureliste:InscriptionService, private listeU:InscriptionService) { }
  //constructor(private kudos: InscriptionService, private alertController:AlertController, public actRoute: ActivatedRoute,private structureliste:InscriptionService) { }

  ngOnInit() {
    this.listeStructure()
    this.listeUsers()
  }

  listeStructure(){
    this.structureliste.listeStructure().subscribe(
        res=> {
            this.str=res
            this.filterStr = this.str;
            console.log(res);
        },err=>console.log(err)  
    );
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

filterStructure(e: any) {
  const val = e.value.toLowerCase();
  this.filterStr = this.str.filter((s: any) => {
      return s.sousStructure.toLowerCase().indexOf(val) > -1;
  })
  console.log(this.filterStr);
}
filterUtilisateur(e:any){
  const val = e.value.toLowerCase();
  this.filterU = this.lis.filter((l:any) =>{
      return l.nom.toLowerCase().indexOf(val) > -1;
  })
  console.log(this.filterU);
  
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
 
  async presentAlertError(nombeneficiaire:string,commentaire:string,nom:string) {
    const alert = await this.alertController.create({
      
      message: "à "+nombeneficiaire+ " "+commentaire+" "+nom,
      buttons: [{text: 'OK'}]
    });

    await alert.present();
  }

  fairekudo(){
    this.formKudo.structure = this.selectedId;
    this.kudos.faireKudo(this.formKudo)
    .subscribe(
      res => {
        //console.log(res)
        this.presentAlertError(res.nombeneficiaire,res.commentaire,res.nom_emetteur)
        this._router.navigate(['/kudowall'])
      },
      error => {
        console.log(error)
        if(error.status === 500){
          this.presentAlertError(error,"","")
          this._router.navigate(['/typeKudo'])
        }

        //this.errorMsg=err.error.exception[1].msg;
       //Swal.fire({
          //title: 'erreur',
          //text:this.errorMsg,
        }
        );
      }
      /*goToViewKudos(detail:any){
        this.kudos.selectkudo = detail;
        this._router.navigateByUrl('/kudowall');

      }*/
}
