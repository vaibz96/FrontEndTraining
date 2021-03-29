import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public router:Router) { } //Dependency Injection
                                        // creating object without 'new' keyword

  ngOnInit(): void {
  }

  homePage(){
    // Token must be stored when username and the password is authenticated
    sessionStorage.setItem("token", "123");
    this.router.navigate(["home"]);
  }

}
