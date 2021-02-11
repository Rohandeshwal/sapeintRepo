import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIConfig } from 'src/configurations/api.config';
import { APIService } from '../core/services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedSection: any;
  regData: any;

  constructor(private http:APIService) { }
 
 getServices(params?:any){
   let URL = environment.APIBase;
   if(params){
    
    for(let key in params){
      URL = URL + "&" + key + "=" + params[key] 
    }
   }
   return this.http.httpGet(URL);
 }

}
