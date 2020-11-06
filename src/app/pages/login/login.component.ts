import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../services/authentication.service';
import Swal from 'sweetalert2';
import {User} from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  forma: FormGroup;
  constructor(private router: Router, private formBuilder: FormBuilder, private loginService:AuthenticationService) { 
    this.createForm();
  }

  ngOnInit(): void {
    this.loginService.getAllUsers().subscribe((data: User[])=>{
      this.loginService.users = data;
    });
  }

  createForm(){
    this.forma = this.formBuilder.group({
      username: ['',[Validators.required,Validators.email]],
      pwd: ['',[Validators.required]]
    });
  }

  getEmailInvalid(){
    return this.forma.get('username').invalid && this.forma.get('username').touched;
  }

  getPwdInvalid(){
    return this.forma.get('pwd').invalid  && this.forma.get('pwd').touched;
  }

  login(){
    if(this.forma.valid){
      if(this.loginService.login(this.forma.value["username"], this.forma.value["pwd"])){
        this.router.navigateByUrl('/activities');
      }else{
        Swal.fire({
          icon: 'error',
          text: 'incorrect data'
        });
      }
    }
    this.forma.reset();
  }

  register(){
    this.router.navigateByUrl('/register');
  }

}
