import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Fake } from "./fake.model";



@Injectable()   // This is class object creation taken care by angular
export class FakeService {

    constructor(public http:HttpClient){}

    sayHello():string{
        return "Weclome to user Defined Service with DI"
    }

    // loadFakeData(){
    //     this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data=>console.log(data),
    //     error=>console.log("Error generated"+error),
    //     ()=>console.log("completed"));
    // }

    loadFakeData():Observable<Fake[]>{   // read observable vs promise 
        return this.http.get<Fake[]>("https://jsonplaceholder.typicode.com/todos");
    }

}

