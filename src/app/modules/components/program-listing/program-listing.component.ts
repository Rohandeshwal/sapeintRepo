import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../shared/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-program-listing',
  templateUrl: './program-listing.component.html',
  styleUrls: ['./program-listing.component.scss']
})
export class ProgramListingComponent implements OnInit {

  spaceData: any;
  constructor(private sharedService: SharedService,
    private route: Router, private shared: SharedService) { }

  ngOnInit(): void {
    this.subscribeToSpaceXLaunchData();
  }

  subscribeToSpaceXLaunchData() {
    this.sharedService.spaceXLaunchData.subscribe(spaceDataWithFilters => {
      this.spaceData = spaceDataWithFilters;
    });
  }
}
