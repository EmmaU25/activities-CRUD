import { Component, OnInit } from '@angular/core';
import { WeatherService } from  '../../services/weather.service';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
  dateae:any;
  dateNumber = new Date().getDate();
  day =  new Date().getDay();
  days: string[] = ['Sunday','Monday','Tuesday','Wednesday','Thrusday','Friday','Saturday'];
  flag:boolean =false;

  constructor(public service: WeatherService) { 
    this.service.getWeather().subscribe(data =>{
      this.dateae = data;
      console.log(data);
      this.flag = true;
    })
  }

  ngOnInit(): void {
  }

}
