import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../shared/spaceXdata';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {
  spaceData:any;
  years:number[];
  // successfulLaunch:boolean;

  
  
  shareDataState:any;

  constructor(private sharedService:SharedService,
    private route:Router,private shared:SharedService) {
      this.years=this.getYears();
    //  this.successfulLaunch = this.getSuccessfulLanch();/
      
     }
  ngOnInit(): void {
    // this.sharedService.setData(true);
   
  }

  // Call year
  getData(year:any){
    this.sharedService.setData(year);
    console.log("data")
  }
 

// call Launch
getSuccessfulLaunch(event:boolean){
  this.sharedService.shareSuccessLauch(event);
  console.log("data");
  
}
getSuccessfulLand(event:boolean){
  this.sharedService.shareLandLauch(event);
  console.log("data");

}
  getYears()
  {
    // abstract method
    let years = []; 
    let currentYear = new Date().getFullYear();
   for(let i=currentYear;i>=currentYear-15; i-- )
   {
     years.push(i)
   }
   return years;
  }


}
