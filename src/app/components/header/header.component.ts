import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService }  from '../../services/authentication.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public service: AuthenticationService,private route: Router) { }

  ngOnInit(): void {
    this.service.loadUserStorage();
  }

  close(){
    this.service.logout();
    this.route.navigateByUrl('/');
  }

}
