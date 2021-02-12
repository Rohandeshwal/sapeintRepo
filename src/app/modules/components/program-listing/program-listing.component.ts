import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-listing',
  templateUrl: './program-listing.component.html',
  styleUrls: ['./program-listing.component.scss']
})
export class ProgramListingComponent implements OnInit {
 
  spaceData:any;
  cloneData:any;
  year:any;
  success:any=false;
  landing:any=false;
  constructor(private sharedService:SharedService,
    private route:Router,private shared:SharedService) { }
 
  ngOnInit(): void {
    this.cloneData=[];
    this.spaceData=[];
    this.getSpaceData();

    this.sharedService.shareDataState.subscribe(res=>{
      this.year= res;
        this.spaceData = this.cloneData.filter((element:any)=>{
          return element.launch_year == res;

        })
    })
    this.sharedService.shareLaunchState.subscribe(res=>{
      this.success=res;
      this.spaceData = this.cloneData.filter((element:any)=>{
        return element.launch_success == res ;
      
      })
    })
    this.sharedService.shareLandState.subscribe(res=>{
      this.landing = res;
      this.spaceData = this.cloneData.filter((element:any)=>{
        return element.rocket.first_stage.cores[0].land_success  == res ;
      })
    })
    console.log("dada",this.getSpaceData)
  }


  getSpaceData(){
    this.shared.getServices().subscribe(res =>{
      this.spaceData = this.cloneData=res;
      console.log(res);
    })
  }


}
