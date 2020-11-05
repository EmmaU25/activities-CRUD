import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ActivitiesComponent } from './pages/activities/activities.component';
import { DetailsComponent } from './pages/details/details.component';
import { WeatherComponent } from './pages/weather/weather.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path: '' , redirectTo: '/main', pathMatch: 'full', },
  {path: 'main', component: LoginComponent },
  {path: 'register', component: RegisterComponent},
  {path: 'activities', component: ActivitiesComponent},
  {path: 'detail/:id', component: DetailsComponent},
  {path: 'weather', component: WeatherComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'gallery', component: GalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
