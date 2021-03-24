import { Component, OnInit } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-structure-directive',
  templateUrl: './structure-directive.component.html',
  styleUrls: ['./structure-directive.component.css']
})
export class StructureDirectiveComponent implements OnInit {
  flag:boolean = false;
  b1:string = "Show";
  stdNames:Array<string>=["Dan", "Brad", "Jim", "Tom"];
  skillNames:Array<string>= new Array()
  emp:Employee = new Employee(100, "Vaibhav", 50000);
  employees:Array<Employee>=new Array();

  constructor() { 
    let emp1 = new Employee(1, "Raj", 12000);
    let emp2 = new Employee(2, "Raghu", 13000);
    let emp3 = new Employee(3, "Anuj", 15000);
    this.employees.push(emp1);
    this.employees.push(emp2);
    this.employees.push(emp3);
  }

  ngOnInit(): void {
  }

  change(){
    this.flag = !this.flag;
    if(this.b1=="Show"){
      this.b1="Hide"
    }else{
      this.b1 = "Show";
    } 
  }

  addSkillName(name:any){
    this.skillNames.push(name);
  }
}
