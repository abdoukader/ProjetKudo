import { Component, OnInit } from '@angular/core';
import { InscriptionService } from 'src/app/services/inscription.service';
import { listkudo } from "../kudowall/listkudo";
import { utilisateur} from "../kudowall/utilisateur";
  import { from } from 'rxjs';

@Component({
  selector: 'app-kudowall',
  templateUrl: './kudowall.page.html',
  styleUrls: ['./kudowall.page.scss'],
})
export class KudowallPage implements OnInit {
  infiniteScroll: any;

  constructor(private listekudos: InscriptionService ,private list:InscriptionService) { }
  public kudo:listkudo [];
  public kudoA: listkudo [] = [];
  public kudoB: listkudo [] = [];
  public kudoC: listkudo [] = [];
  public kudoD: listkudo [] = [];
  public kudoE: listkudo [] = [];
  public kudoF: listkudo [] = [];


  infos: any;
  

  loadData(event) {
    setTimeout(() => {
      console.log('Done');
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      /*if (this.infos.length == 1000) {
        event.target.disabled = true;
      }*/
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }
  ngOnInit() { 

      this.listekudos.kudowall()
       .subscribe(
       res => {
       this.kudo = res 
       console.log(res)
       this.kudo.forEach((item) =>  {
         switch (item.kudoPoint.id) {
           case 1:
             this.kudoA.push(item);
             break;

            case 2:
              this.kudoB.push(item);
            break;

            case 3:
              this.kudoC.push(item);
            break;

            case 4:
              this.kudoD.push(item);
            break;

            case 5:
              this.kudoE.push(item);
            break;

            case 6:
              this.kudoF.push(item);
            
            default:
            break;
         } 
        
       })
       //console.log(this.kudoA)
       //console.log(this.kudoB)
       console.log(this.kudoB)
       },
      err => {
      console.error(err)
      }
      );
  }

}
