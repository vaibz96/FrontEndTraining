import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-app',
  templateUrl: './card-app.component.html',
  styleUrls: ['./card-app.component.css']
})
export class CardAppComponent implements OnInit {
  msg:string= "";

  constructor() { }

  ngOnInit(): void {
  }

  fun(){
    this.msg = "Welcome to Mat-Card Button"
  }
}
