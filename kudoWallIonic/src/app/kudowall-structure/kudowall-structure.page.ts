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
  str: any=[];
  filterStr: any=[];
  selectedId = null;
  filtered = false;
  take=false;
  nom:string;
  id= this.route.snapshot.params['id'];
 
  constructor(private inscriptionService: InscriptionService,private list:InscriptionService,public listekudos: InscriptionService,
              private kudoPage: KudoPage,
              private structureliste:InscriptionService,
              private _router: Router,
              private route: ActivatedRoute) { }

  public kudo:listkudo [];
  public kudoA: listkudo [] = [];
  public kudoB: listkudo [] = [];
  public kudoC: listkudo [] = [];
  public kudoD: listkudo [] = [];
  public kudoE: listkudo [] = [];
  public kudoF: listkudo [] = [];
  public items:any ;

  ngOnInit() {this.listeStructure()
    if(this.id){
    this.getKudosOfaService(this.id)
    }
    //this.iniTialiseKudos();
              
}

listeStructure(){
  this.structureliste.listeStructure()
  .subscribe(
        res=> {
          this.items=res
          this.filterStr = this.str;
          //console.log(this.items);
      },err=>{
      //console.log(err)  
      }
  );
}

selectStr(input: any, id: number, nom: string) {
  input.value = nom;
  this.selectedId = id;
  this.getItems()
  //console.log(this.selectedId);
  this.filtered = false;
}

filterStructure(e: any) {
  const val = e.value.toLowerCase();
  this.filterStr = this.items.filter((s: any) => {
      return s.sousStructure.toLowerCase().indexOf(val) > -1;
  })
  this.getItems();
  //console.log(this.filterStr);
}

getKudosOfaService(service){
  this.listekudos.kudowallOfaService(service)
  .subscribe(
    res => {
      if(res==[]){ this.ServiceVide=false }
      else{ this.kudo=res}
    //console.log(res)
    this.inscriptionService.regroupKudos(this.kudo,this.kudoA,
      this.kudoB,this.kudoC,this.kudoD,this.kudoE,this.kudoF)
    this.ServiceVide=true

    },
   err => {  //console.log(err)
             this.ServiceVide=false;
   }
  );
}

 getItems() {
  this.getKudosOfaService(this.selectedId)
  this.iniTialiseKudos();
 }
    
  loadData(event) {
    setTimeout(() => {
      //console.log('Done');
      event.target.complete();
    }, 500);
  }

changeButton(){
  this.take=true;
}
iniTialiseKudos(){
  this.inscriptionService.regroupKudos(this.kudo=[],this.kudoA=[],this.kudoB=[],this.kudoC=[],this.kudoD=[],this.kudoE=[],this.kudoF=[])
}

  toggleInfiniteScroll() { /*this.infiniteScroll.disabled = !this.infiniteScroll.disabled;*/}

}
