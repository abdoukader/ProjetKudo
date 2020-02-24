import { Component, OnInit } from '@angular/core';
import { InscriptionService } from '../services/inscription.service';

@Component({
  selector: 'app-type-kudo-team',
  templateUrl: './type-kudo-team.page.html',
  styleUrls: ['./type-kudo-team.page.scss'],
})
export class TypeKudoTeamPage implements OnInit {

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
