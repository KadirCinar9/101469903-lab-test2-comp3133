import { Component, OnInit } from '@angular/core';
import { SpaceXApiService } from '../network/spacexapi.service';
import { Mission } from '../models/mission';

@Component({
  selector: 'app-missionlist',
  templateUrl: './missionlist.component.html',
  styleUrls: ['./missionlist.component.css']
})
export class MissionlistComponent implements OnInit {
  missions: Mission[] = [];

  constructor(private spaceXService: SpaceXApiService) {}

  ngOnInit(): void {
    this.spaceXService.getMissions().subscribe((data) => {
      this.missions = data;
    });
  }
}
