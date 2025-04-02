import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpaceXApiService } from '../network/spacexapi.service';

@Component({
  selector: 'app-missiondetails',
  templateUrl: './missiondetails.component.html',
  styleUrls: ['./missiondetails.component.css']
})
export class MissiondetailsComponent implements OnInit {
  mission: any;

  constructor(private route: ActivatedRoute, private spaceXService: SpaceXApiService) {}

  ngOnInit(): void {
    const flightNumber = Number(this.route.snapshot.paramMap.get('id'));
    this.spaceXService.getMissionByFlightNumber(flightNumber).subscribe(data => {
      this.mission = data;
    });
  }
}
