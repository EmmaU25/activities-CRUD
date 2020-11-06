import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Activity }  from '../models/activity';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ActivityService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  activies: Activity[];
  constructor(private http:HttpClient) { }
  getActivities(){
    return this.http.get(environment.apiActivities+"activities");
  }

  getActivityByID(id:string){
    return this.http.get(environment.apiActivities+"activities/"+id)
  }

  updateById(id:string, act:Activity){
    return this.http.put(environment.apiActivities+"activities/"+id, JSON.stringify(act),this.httpOptions);
  }
  
  addNewActivity(act: Activity){
    return this.http.post(environment.apiActivities+ "activities",JSON.stringify(act), this.httpOptions);
  }

  deleteByID(id:string){
    return this.http.delete(environment.apiActivities+"activities/"+id, this.httpOptions)
  }
}
