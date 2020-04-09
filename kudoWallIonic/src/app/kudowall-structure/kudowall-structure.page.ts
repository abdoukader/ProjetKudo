import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';
import { Router, ActivatedRoute } from '@angular/router';
import { listkudo } from '../pages/kudowall/listkudo';
import { KudoPage } from '../pages/kudo/kudo.page';

@Component({
  selector: 'app-kudowall-structure',
  templateUrl: './kudowall-structure.page.html',
  styleUrls: ['./kudowall-structure.page.scss'],
})
export class KudowallStructurePage implements OnInit {
  
  ServiceVide=false;
  e:any;
  infiniteScroll: any;
  input:any;
  //id:number;
  nom:string;
  id= this.route.snapshot.params['id'];
 
  constructor(private inscriptionService: InscriptionService,private list:InscriptionService,public listekudos: InscriptionService,
              private kudoPage: KudoPage,
              private _router: Router,
              private route: ActivatedRoute) { }


  public kudo:listkudo [];
  public kudoA: listkudo [] = [];
  public kudoB: listkudo [] = [];
  public kudoC: listkudo [] = [];
  public kudoD: listkudo [] = [];
  public kudoE: listkudo [] = [];
  public kudoF: listkudo [] = [];


  ngOnInit() {this.kudoPage.listeStructure() 
              this.kudoPage.filterStructure(this.e)
              this.kudoPage.selectStr(this.input,this.id, this.nom);
}

 getItems(eva: any) {
  //this.kudoPage.listeStructure();
  const val = eva.target.value;
  this.listekudos.kudowallOfaService(val)
  .subscribe(
    res => {
    this.kudo = res 
    this.inscriptionService.regroupKudos(this.kudo,this.kudoA,
      this.kudoB,this.kudoC,this.kudoD,this.kudoE,this.kudoF)
    this.ServiceVide=true
    },
   err => {
   console.log(err)
   }
  );

 }

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 500);
  }

  toggleInfiniteScroll() { /*this.infiniteScroll.disabled = !this.infiniteScroll.disabled;*/}

}