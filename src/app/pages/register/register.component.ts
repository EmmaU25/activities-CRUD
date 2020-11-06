import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  form: FormGroup
  showpassword: boolean = true;

  constructor(private formaBuilder: FormBuilder, private login: AuthenticationService, private router: Router) { this.createForm(); }

  ngOnInit(): void {
  }

  togglePasswordText() {
    this.showpassword = !this.showpassword;
  }

  emailInvalid(){
    return this.form.get('email').invalid && this.form.get('email').touched;
  }

  nameInvalid(){
    return this.form.get('displayName').invalid && this.form.get('displayName').touched;
  }

   passwordInvalid(){
    return this.form.get('password').invalid && this.form.get('password').touched;
  }

  tyeInvalid(){
    return this.form.get('types').invalid && this.form.get('types').touched;
  }

  signUp() {
    if(this.form.valid){
     
      this.login.registerUser(this.form.value).subscribe(data =>{
        if(data){
          //this.login.saveUserStorage();
          this.login.user = data;
          this.login.saveUserStorage();
          this.router.navigateByUrl("/activities");
          //this.login.user = true;

          //this.login.tipo = this.form.value["types"];
        }else{
          Swal.fire({
            icon: 'error',
            text: 'Register Failed, try later'
          })
        }
      })

      console.log(this.form.value);
    }else{
      console.log("invalid form");
    }
  }

  createForm(){
    this.form = this.formaBuilder.group({
      email : ['',[Validators.required, Validators.email]],
      displayName : ['',[Validators.required]],
      password : ['',[Validators.required]],
      types: ['',[Validators.required]]
    })
  }
}
