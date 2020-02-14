
import { Injectable } from "@angular/core";
import { HttpClientModule, HttpClient,  } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class InscriptionService  {
  
    constructor(private http: HttpClient,private inscript :InscriptionService) { }
    
    private endpoint = 'http://127.0.0.1:8080/user/add';
    
  
    inscription(data1) {
  
      
      const formData1: FormData = new FormData();

      formData1.append('email',data1.email);
      formData1.append('nom',data1.nom);
      formData1.append('password',data1.password);
      formData1.append('structure',data1.structure);
      formData1.append('telephone',data1.telephone);
      formData1.append('username',data1.username);
       
      
      console.log(formData1);
      
      return this.http.post(this.endpoint, formData1);
    }
  }
  