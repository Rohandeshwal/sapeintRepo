import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { APIService } from '../core/services/api.service';
import { BehaviorSubject  } from 'rxjs';
import { SpaceLaunchFilters } from '../components/filter-component/filter-component.component';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  public  spaceXLaunchData = new BehaviorSubject({});
  constructor(private http:APIService) { }
 
public getSpaceDataForFilters(launchFilters:SpaceLaunchFilters)
 {
   const urlWithFilters = this.buildURLWithFilters(launchFilters);
    this.http.httpGet(urlWithFilters).subscribe(data=>
      {
        this.spaceXLaunchData.next(data);
      });
   
 }
 private buildURLWithFilters(launchFilters: SpaceLaunchFilters) {
  let urlWithFilters = environment.APIBase;
  if(launchFilters.launchYear)
    {
      urlWithFilters= urlWithFilters.concat(`&year=${launchFilters.launchYear}`);
    }  
    if(launchFilters.hasSuccessfulLaunch)
    {
      urlWithFilters=  urlWithFilters.concat(`&launch_success=${launchFilters.hasSuccessfulLaunch}`);
    }  
    if(launchFilters.hasSuccessfulLanding)
    {
      urlWithFilters= urlWithFilters.concat(`&landing_success=${launchFilters.hasSuccessfulLanding}`);
    }  

    return urlWithFilters;
  }

}
