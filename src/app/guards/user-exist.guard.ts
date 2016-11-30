import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class UserExistsGuard implements CanActivate {

canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return Observable.create(observer=>observer.onNext(true));
  }
}