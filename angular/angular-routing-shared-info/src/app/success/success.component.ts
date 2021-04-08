import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {
  user?:string;
  //we have to do DI for ActivatedRouter: Which helps to retirve from the path data

  constructor(public activeROuter:ActivatedRoute) { }

  ngOnInit(): void {
    this.activeROuter.params.subscribe(v=>this.user=v.user);
  }

}
