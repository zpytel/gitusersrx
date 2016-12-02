import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/toArray';
import { of } from 'rxjs/observable/of';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Effect, Actions } from '@ngrx/effects';
import { Database } from '@ngrx/db';
import { Observable } from 'rxjs/Observable';

import {CarService} from '../services/car.service';
import * as caractions from '../actions/cars';
import {Car} from '../models/cars'

@Injectable()
export class CarEffects{
    constructor(private actions$:Actions,private service:CarService){
      
    }

    @Effect()
    loadCars$:Observable<Action>=this.actions$
    .ofType(caractions.ActionTypes.CAR_LOAD)
    .startWith(new caractions.CarLoad())
    .switchMap(()=>this.service.getCars())
    .toArray()
    .map((cars:Car[])=>new caractions.CarLoadSuccess(cars))
    .catch(error=>of(new caractions.CarLoadFailed(error))


}
