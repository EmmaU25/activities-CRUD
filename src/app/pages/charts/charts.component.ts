import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Label, MultiDataSet } from 'ng2-charts';
import { Activity } from '../../models/activity';
import { ActivityService } from '../../services/activity.service';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})

export class ChartsComponent implements OnInit {
  doughnutChartLabels: Label[] = [];
  doughnutChartData: MultiDataSet = [[]];
  doughnutChartType: ChartType = 'doughnut';
  flag:boolean=false;
  result:any[];

  constructor(private service: ActivityService) { }

  ngOnInit(): void {
    this.doughnutChartLabels = [];
    this.doughnutChartData = [[]];
    
    this.service.getActivities().subscribe((data: Activity[])=>{
      this.result  = [...data.reduce((mp,o) =>{
        if (!mp.has(o.categoria)) mp.set(o.categoria, { ...o, count: 0 });
        mp.get(o.categoria).count++;
        return mp;
      }, new Map).values()]

      this.result.sort((a,b) => (a.count > b.count) ? -1 : 1);

      this.result.map((data,index) =>{
        console.log(index);
        if(index <= 4){
          this.doughnutChartLabels.push(data.categoria);
          this.doughnutChartData[0].push(data.count);
        }
      });

      this.flag= true;
    });
  }

}
