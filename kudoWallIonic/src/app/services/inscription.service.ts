
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

    constructor(private http: HttpClient,private inscript :InscriptionService) { }
    
<<<<<<< HEAD
    private endpoint = 'http://127.0.0.1:8080/add/user';
    
  
    inscription(data1) {
  
      
      const formData1: FormData = new FormData();

      formData1.append('email',data1.email);
      formData1.append('nom',data1.nom);
      formData1.append('username',data1.username);
      formData1.append('password',data1.password);
      formData1.append('structure',data1.structure);
      formData1.append('telephone',data1.telephone);
       
      
      console.log(formData1);
=======
      FindBySousStructure(data):Observable<any>{
        
        return this.http.post(this.URL, data);

      }

    inscription(data1):Observable<any> {
>>>>>>> 1cb209db8db4fd5fe47ce563795673e505fe4659
      
      return this.http.post(this.endpoint, data1);
    }

    faireKudo(data2):Observable<any>{
      return this.http.post(this.endpoint1,data2)
    }
  }
  