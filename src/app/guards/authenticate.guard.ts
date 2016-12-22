import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {Store} from '@ngrx/store';


import {User} from "../models/auth.model"
import * as fromRoot from '../reducers';



@Injectable()
export class AuthenticateGuard implements CanActivate {
$isAuthenticated:Observable<boolean>;
constructor(private router:Router,private store:Store<fromRoot.State>){
this.$isAuthenticated=store.select(fromRoot.getAuthenticated)
}
canActivate(route: ActivatedRouteSnapshot):boolean {
   let isvlid:boolean=false;
   this.$isAuthenticated.subscribe((val:boolean)=>isvlid=val)
   return isvlid
    
    
}
}