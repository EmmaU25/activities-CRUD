import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DetailsComponent } from './pages/details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ChartsComponent,
    WeatherComponent,
    GalleryComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
