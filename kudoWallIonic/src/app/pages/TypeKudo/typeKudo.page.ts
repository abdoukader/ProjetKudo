import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';

@Component({
  selector: 'app-typeKudo',
  templateUrl: './typeKudo.page.html',
  styleUrls: ['./typeKudo.page.scss'],
})
export class TypeKudoPage implements OnInit {

  constructor(private listek:InscriptionService) { }
  listeku ;
  ngOnInit() {
    this.listekudoP();
  }

  listekudoP(){
    this.listek.listekudoP()
    .subscribe(response=>{
      this.listeku=response
      console.log(this.listeku);
    },
    err => console.log(err)
    )
  }

}