
import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient,  } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AutoCompleteService } from 'ionic4-auto-complete';

@Injectable({
    providedIn: 'root'
})
export class InscriptionService{

  labelAttribute = 'structure';
  formValueAttribute ='id';
  private endpoint = 'http://127.0.0.1:8080/add/user';
  private URL = 'http://127.0.0.1:8080/user/showstructures/{id}';
  private endpoint1 = 'http://127.0.0.1:8080/kudo/personne';
  private endpoint2 = 'http://127.0.0.1:8080/kudo/liste';
  private urliste = 'http://127.0.0.1:8080/add/listekudopoint';
  private urllsiteStructure = 'http://127.0.0.1:8080/add/liste-structures';

  constructor(private http: HttpClient,private inscript :InscriptionService) { }
    
      FindBySousStructure(data):Observable<any>{
        
        return this.http.post(this.URL, data);

      }

    inscription(Data):Observable<any> {
      
      return this.http.post(this.endpoint, Data);
    }

    faireKudo(data2):Observable<any>{
      return this.http.post(this.endpoint1,data2)
    }

    kudowall(kudos):Observable<any>{
      return this.http.get(this.endpoint2,kudos)
    }

    //getKudopointDuKudo(id:number){
      //return this.getElement("/utilisateur/affecterCompte/"+id);
    //}
      
    listekudoP(){
      return this.http.get(this.urliste);
    }

    listeStructure(){
      return this.http.get(this.urllsiteStructure)
    }
  }