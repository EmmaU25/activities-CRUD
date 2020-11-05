import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { DetailsComponent } from './pages/details/details.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ComponentsModule} from 'src/app/components/components.module';
import { CapitalLetterPipe } from './pipes/capital-letter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ChartsComponent,
    WeatherComponent,
    GalleryComponent,
    DetailsComponent,
    CapitalLetterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
