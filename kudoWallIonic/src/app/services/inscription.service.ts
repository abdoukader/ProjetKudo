
import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient,  } from "@angular/common/http";
import { Observable } from 'rxjs';
import { AutoCompleteService } from 'ionic4-auto-complete';

@Injectable({
    providedIn: 'root'
})
export class InscriptionService  {

  labelAttribute = 'structure';
  formValueAttribute ='id';
  private endpoint = 'http://127.0.0.1:8080/user/add';
  private URL = 'http://127.0.0.1:8080/user/showstructures/7';
  private endpoint1 = 'http://127.0.0.1:8080/kudo/personne';
  private urliste = 'http://127.0.0.1:8080/user/listekudopoint'

    constructor(private http: HttpClient,private inscript :InscriptionService) { }
    
      FindBySousStructure(data):Observable<any>{
        
        return this.http.post(this.URL, data);

      }

    inscription(data1):Observable<any> {
      
      return this.http.post(this.endpoint, data1);
    }

    faireKudo(data2):Observable<any>{
      return this.http.post(this.endpoint1,data2)
    }

    listekudoP(){
      return this.http.get(this.urliste);
    }
  }
  