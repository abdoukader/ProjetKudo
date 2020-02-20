import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-kudowall',
  templateUrl: './kudowall.page.html',
  styleUrls: ['./kudowall.page.scss'],
})
export class KudowallPage implements OnInit {

  constructor(private listekudos: InscriptionService) { }
  kudos: any = [];

  ngOnInit() { }

  kudowall(kudos) {
  this.listekudos.kudowall(kudos)
   .subscribe(
   res => {
   this.listekudos = res
   },
  err => {
  console.error(err)
  }
  );
  }

  getKudopointDuKudo(id:number){
    return this.getKudopointDuKudo;
  }
}
