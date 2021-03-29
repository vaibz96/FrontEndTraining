import { Component, OnInit } from '@angular/core';
import { FakeService } from '../fake.service';
import { MyService } from '../mycustom.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css'],
  //providers: [FakeService]
})
export class SecondComponent implements OnInit {
  msg2:string="";
  msg3:string="";
  constructor(public service:FakeService) { }

  ngOnInit(): void {
  }

  fun1(){
    let obj = new MyService();
    this.msg2 = obj.sayHello()  
  }
  display(){
    this.msg3 = this.service.sayHello()  
  }

}
