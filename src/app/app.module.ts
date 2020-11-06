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
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


//firebasetricks

import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
@NgModule({
  declarations: [
    AppComponent,
    ActivitiesComponent,
    ChartsComponent,
    WeatherComponent,
    GalleryComponent,
    DetailsComponent,
    CapitalLetterPipe,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ComponentsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ChartsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
