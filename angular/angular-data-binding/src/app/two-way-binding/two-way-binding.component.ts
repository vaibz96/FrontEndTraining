import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  fname:string="Vaibhav";
  age:number=21;
  skill:string="C++";

  constructor() { }

  ngOnInit(): void {
  }

  updateSkill(skillInfo:any){
    this.skill=skillInfo
  }
}
