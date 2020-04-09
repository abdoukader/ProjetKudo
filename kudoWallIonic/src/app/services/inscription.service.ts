import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InscriptionService{
  
  labelAttribute = 'structure';
  formValueAttribute ='id';
  selectUser:any;

  //infiniteScroll:any;

  private endpoint = 'http://127.0.0.1:8080/add/user';
  private URL = 'http://127.0.0.1:8080/user/showstructures/{id}';
  private endpoint1 = 'http://127.0.0.1:8080/kudo/personne';
  private urliste = 'http://127.0.0.1:8080/add/listekudopoint';
  private urllsiteStructure = 'http://127.0.0.1:8080/add/liste-structures';
  private endpoint3 = 'http://127.0.0.1:8080/kudo/team';
  private endpoint4 = 'http://127.0.0.1:8080/add/liste-user';
  private kudos = 'http://127.0.0.1:8080/kudo/liste-kudo/';                                                  
  private kudowallGlobal = 'http://127.0.0.1:8080/kudo/liste';
  private kudowallStructure = 'http://127.0.0.1:8080/kudo/liste-kudos-service/'
  private detailG = 'http://127.0.0.1:8080/add/genereuxPeriode/start/';
  private detailV = 'http://127.0.0.1:8080/add/vainqueurPeriode/start/';

  constructor(private http: HttpClient,public listekudos:InscriptionService) { }
    
  FindBySousStructure(data):Observable<any>{
      return this.http.post(this.URL, data);
  }

  inscription(Data):Observable<any>{
      return this.http.post(this.endpoint, Data);
  }

  faireKudo(data2):Observable<any>{
      return this.http.post(this.endpoint1,data2);
  }
  faireKudoTeam(data3):Observable<any>{
      return this.http.post(this.endpoint3,data3);
  }

  listekudoP(){
      return this.http.get(this.urliste);
  }

    listeStructure(){
      return this.http.get(this.urllsiteStructure);
  }
    listerUser(){
      return this.http.get(this.endpoint4);
  }
 
    regroupKudos(kudo,kudoA,kudoB,kudoC,kudoD,kudoE,kudoF){
      kudo.forEach((item) =>  {
        switch (item.kudoPoint.id){
          case 1:
            kudoA.push(item);
            break;

           case 2:
             kudoB.push(item);
           break;

           case 3:
            kudoC.push(item);
           break;

           case 4:
             kudoD.push(item);
           break;

           case 5:
             kudoE.push(item);
           break;

           case 6:
             kudoF.push(item);
           
           default:
           break;
        } 
      })
  }
  getKudos(id):Observable<any>{
    return this.http.get(this.kudos+id);
}
    kudowall():Observable<any>{
      return this.http.get(this.kudowallGlobal);
  }
    
    kudowallOfaService(id):Observable<any>{
      return this.http.get<any>(this.kudowallStructure+id);
  }

  listeUtilisateur(detailVainqueur){
      return this.http.get<any>(this.detailG+detailVainqueur.debut+"/end/"+detailVainqueur.fin)
    }
   listeUtilisateurV(detailvainqueur){
     return this.http.get<any>(this.detailV+detailvainqueur.debut+"/end/"+detailvainqueur.fin)
   }

}