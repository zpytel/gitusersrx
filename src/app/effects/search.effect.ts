import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/takeUntil';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { empty } from 'rxjs/observable/empty';
import { of } from 'rxjs/observable/of';

import { CarService } from '../services/car.service';
import * as search from '../actions/search';

@Injectable()
export class SearchEffect{
  constructor(private actions$:Actions,private service:CarService){

  }
  @Effect()
  search$:Observable<Action>=this.actions$
  .ofType(search.ActionTypes.SEARCH)
  .debounceTime(300)
  .map((action:search.SearchAction)=>action.payload)
  .switchMap(querry=>{
   if(querry===''){
       return empty();
   }
   const nextSearch$=this.actions$.ofType(search.ActionTypes.SEARCH).skip(1);
  
   return this.service.searchCars(querry)
   .takeUntil(nextSearch$)
   .map(cars=>new search.SearchCompleteAction(cars))
   .catch(()=>of(new search.SearchCompleteAction([])));

  })
}

