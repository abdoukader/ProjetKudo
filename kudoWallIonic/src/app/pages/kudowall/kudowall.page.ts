import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';
import { listkudo } from "../kudowall/listkudo";

@Component({
  selector: 'app-kudowall',
  templateUrl: './kudowall.page.html',
  styleUrls: ['./kudowall.page.scss'],
})
export class KudowallPage implements OnInit {

  constructor(public inscriptionService:InscriptionService,public listekudos: InscriptionService ,private list:InscriptionService) { }

  id:number;
  infiniteScroll: any;
  event:any;
  public kudo:listkudo [];
  public kudoA: listkudo [] = [];
  public kudoB: listkudo [] = [];
  public kudoC: listkudo [] = [];
  public kudoD: listkudo [] = [];
  public kudoE: listkudo [] = [];
  public kudoF: listkudo [] = [];

  ngOnInit() { 

    /*this.inscriptionService.getKudos(1)
    .subscribe(
      res => {
        console.log(res)
      }
    
    );*/

      this.listekudos.kudowall()
       .subscribe(
       res => {
       this.kudo = res 
       console.log(res)
       this.inscriptionService.regroupKudos(this.kudo,this.kudoA,
        this.kudoB,this.kudoC,this.kudoD,this.kudoE,this.kudoF)
        //this.inscriptionService.loadData(this.event)
        //this.inscriptionService.toggleInfiniteScroll()
       },
      err => {
      console.error(err)
      }
      );
  }

  /*getKudos(id){
    this.inscriptionService.getKudos(id)
    .subscribe(
      res => {
        console.log(res)
      }
    
    );
  }*/

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();
    }, 500);
  }

  toggleInfiniteScroll() {  /*this.infiniteScroll.disabled = !this.infiniteScroll.disabled*/ }

}
