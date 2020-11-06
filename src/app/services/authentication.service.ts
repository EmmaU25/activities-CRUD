import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public user: any;
  users: User[] = [];
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  getAllUsers(){
    return this.http.get(environment.apiActivities+"users");
  }

  registerUser(user:User){
    return this.http.post(environment.apiActivities+"users", JSON.stringify(user), this.httpOptions);
  }

  login(usere:string, pwd:string):boolean{
    let flag:boolean=false;
    this.users.map(dta =>{
      if(dta.email === usere && dta.password === pwd){
        flag = true;
        this.user = dta;
        this.saveUserStorage();
      }
    });
    return flag
  }


  saveUserStorage() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  logout(){
    localStorage.removeItem('user');
    this.user = null;
  }

  checkSession(){
    return localStorage.getItem('user') ? true : false;
  }

  loadUserStorage(){
    if(localStorage.getItem('user'))
      this.user = JSON.parse(localStorage.getItem('user'));
  }
  
}
