import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-program-listing',
  templateUrl: './program-listing.component.html',
  styleUrls: ['./program-listing.component.scss']
})
export class ProgramListingComponent implements OnInit {
  services= [
    {
      img:"./assets/images/1.jpg",
      title:"Falcon1",
      missionIds:1,
      launchYear:2019,
      successfulLaunch:"false",
      successLanding:"false"

    },
    {
      img:"./assets/images/2.jpg",
      title:"Demo state 1",
      missionIds:1,
      launchYear:2019,
      successfulLaunch:"false",
      successLanding:"false"

    },
    {
      img:"./assets/images/3.jpg",
      title:"RASTSA#",
      missionIds:1,
      launchYear:2019,
      successfulLaunch:"false",
      successLanding:"false"

    },
    {
      img:"./assets/images/4.jpg",
      title:"DSEER%",
      missionIds:1,
      launchYear:2019,
      successfulLaunch:"false",
      successLanding:"false"

    },
    {
      img:"./assets/images/5.jpg",
      title:"#DALYI",
      missionIds:1,
      launchYear:2019,
      successfulLaunch:"false",
      successLanding:"false"

    },
  ]
  constructor() { }
 
  ngOnInit(): void {
  }

}
