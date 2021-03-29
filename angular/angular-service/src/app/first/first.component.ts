import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { MyService } from '../mycustom.service';
import { Fake } from "../fake.model";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
  //providers: [FakeService] // register on component level
})
export class FirstComponent implements OnInit {
  msg1:string="";
  msg2:string="";
  fakeData:Array<Fake>=[];
  constructor(public service:FakeService) { 
    
  } // pull the registered service

  ngOnInit(): void {
    // this.service.loadFakeData().subscribe(data=>this.fakeData=data);   // calls the function automaticaly no need to call the function
  }

  fun(){
    let obj = new MyService();
    this.msg1 = obj.sayHello() 

  }
  display(){
    this.msg2 = this.service.sayHello()  
  }

  callFakeService(){
    this.service.loadFakeData().subscribe(data=>this.fakeData=data);
  }

}
