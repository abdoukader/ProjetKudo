import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class KudoService{

    constructor(private http: HttpClient,kud : KudoService){

    }

}