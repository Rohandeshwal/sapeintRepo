import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIConfig } from 'src/configurations/api.config';
import { APIService } from '../core/services/api.service';
import { BehaviorSubject  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  selectedSection: any;
  regData: any;
  private shareData = new BehaviorSubject("");
  shareDataState = this.shareData.asObservable();

  private shareLaunch = new BehaviorSubject(false);
  shareLaunchState = this.shareLaunch .asObservable();

  private shareLanding = new BehaviorSubject(false);
  shareLandState = this.shareLanding .asObservable();

  constructor(private http:APIService) { }
 
  setData(value:any)
  {
    this.shareData.next(value)
  }


  shareSuccessLauch(value:boolean){
    this.shareLaunch.next(value)
  }

  shareLandLauch(value:boolean){
    this.shareLanding.next(value)
  }




 getServices(params?:any){
   let URL = environment.APIBase;
   if(params){
    for(let key in params){
      URL = URL+ "&" + key + "=" + params[key] 
    }
   }
   return this.http.httpGet(URL);
 }


}
