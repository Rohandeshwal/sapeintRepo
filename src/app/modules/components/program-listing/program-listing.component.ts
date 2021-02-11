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
  constructor(private sharedService:SharedService,
    private route:Router,private shared:SharedService) { }

  ngOnInit(): void {
    this.getSpaceData();
    console.log("dada",this.getSpaceData)
  }
  getSpaceData(){
    // const params={launch_year:2014};
    this.shared.getServices().subscribe(res =>{
      this.spaceData = res;
      console.log(res);
    })
  }

}
