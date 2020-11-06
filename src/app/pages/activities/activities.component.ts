import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Activity } from 'src/app/models/activity';
import { ActivityService } from '../../services/activity.service';
@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit,OnChanges {

  constructor(public activitiesService: ActivityService,private router:Router ) { }

  ngOnChanges(changes: SimpleChanges) {
    
  }

  ngOnInit(): void {
    this.activitiesService.getActivities().subscribe( (data: Activity[]) =>{
      this.activitiesService.activies = data;
    });
  }


  activityAction(id:string){
    this.router.navigateByUrl(`/detail/${id}`);
  }

}
