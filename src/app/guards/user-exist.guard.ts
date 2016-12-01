import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';



@Injectable()
export class UserExistsGuard implements CanActivate {
constructor(private router:Router){

}
canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
  if(route.params['id']>=12){
   return Observable.of(true);
  }else{
    console.log("error");
    return Observable.of(false);
    
  }
    
  }
}