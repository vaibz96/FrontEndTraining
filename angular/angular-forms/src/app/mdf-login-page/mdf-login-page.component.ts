import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-mdf-login-page',
  templateUrl: './mdf-login-page.component.html',
  styleUrls: ['./mdf-login-page.component.css']
})
export class MdfLoginPageComponent implements OnInit {
  msg:string="";
  loginRef = new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });

  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    console.log(this.loginRef.value);
    let user1= this.loginRef.get("user")?.value;
    let pass1= this.loginRef.get("pass")?.value;
    if(user1=="Ravi" && pass1=="123"){
      this.msg = "Successfully Login";
    }else{
      this.msg = "Login Failed";
    }

  }

}
