import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-missionfilter',
  templateUrl: './missionfilter.component.html',
  styleUrls: ['./missionfilter.component.css']
})
export class MissionfilterComponent {
  @Output() filterEvent = new EventEmitter<string>();

  onFilter(year: string) {
    this.filterEvent.emit(year);
  }
}
