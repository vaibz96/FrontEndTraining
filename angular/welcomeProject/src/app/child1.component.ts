import {Component} from "@angular/core";

@Component({
    selector:"child-tag",
    template:` <div> This is Second Child </div> <br/> {{msg}}`,
    styleUrls:["div{background-color:red;}"]
})

export class Child1Component {
    msg:string='This is Second Child Component';
}