import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.css']
})
export class Child4Component implements OnInit {
  nameChild4?:Array<string>;

  constructor(public service:SharedService) { }

  ngOnInit(): void {
  }

  displayNames(){
    this.nameChild4=this.service.getNames();
  }

}
