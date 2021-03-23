import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  fname:string="Vaibhav";
  lname:string="Shanbhag";
  skillInfo:string=""
  age:number = 21;
  constructor() { }

  ngOnInit(): void {
  }

  fun():void {
    console.log("Fun is activated")
  }

  changeAge():void {
    this.age = 25;
  }

  addSkill(skill:any){
    this.skillInfo=skill;
  }

}
