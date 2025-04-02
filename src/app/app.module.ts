import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http'; // ✅ New import
import { MissionlistComponent } from './missionlist/missionlist.component';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionfilterComponent } from './missionfilter/missionfilter.component';

@NgModule({
  declarations: [
    AppComponent,
    MissionlistComponent,
    MissiondetailsComponent,
    MissionfilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
  ],
  providers: [
    provideHttpClient()  // ✅ Use this instead of HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
