import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpaceXApiService {
  getAllMissions() {
    throw new Error('Method not implemented.');
  }
  private apiUrl = 'https://api.spacexdata.com/v3/launches';

  constructor(private http: HttpClient) {}

  getMissions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getMissionByFlightNumber(flightNumber: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${flightNumber}`);
  }
}
