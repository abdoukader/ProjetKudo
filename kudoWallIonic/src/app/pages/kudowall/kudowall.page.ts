import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-kudowall',
  templateUrl: './kudowall.page.html',
  styleUrls: ['./kudowall.page.scss'],
})
export class KudowallPage implements OnInit {

  constructor(private listekudos: InscriptionService) { }
  kudos: any;
  infos: any;


  ngOnInit() { 
    /*console.log(this.kudos.selectkudo);
    this.infos = this.kudos.selectkudo;*/
  }

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


}
