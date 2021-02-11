import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-filter-component',
  templateUrl: './filter-component.component.html',
  styleUrls: ['./filter-component.component.scss']
})
export class FilterComponentComponent implements OnInit {
  spaceData:any;
  years:number[];

  @Input() receiveYearData: string;

  constructor(private sharedService:SharedService,
    private route:Router,private shared:SharedService) {
      this.years=this.getYears();
      this.receiveYearData =""
     }
  ngOnInit(): void {
   console.log("aayga", this.years);
  }
  getData(){
    
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
