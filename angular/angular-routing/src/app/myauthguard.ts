import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";


@Injectable()                                        // pre-defined interface
export class MyAuthGuard implements CanActivate {
    canActivate(){               //pre-defined methods.
        console.log("I came here")
        let obj = sessionStorage.getItem("token");
        if(obj!=null){
            return true;
        }else{
            return false;
        }
        
    }
}