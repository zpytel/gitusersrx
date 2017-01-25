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


import {HitService} from '../services/hit.service';
import * as hitactions from '../actions/hits.action';
import {Hit,Hits} from '../models/hits'

@Injectable()
export class HitEffects{
    index:string;
    type:string;
    constructor(private actions$:Actions,private service:HitService){
      this.index="firebase";
      this.type="disease"
    }

@Effect()
  search$:Observable<Action>=this.actions$
  .ofType(hitactions.ActionTypes.HIT_LOAD)
  .debounceTime(500)
  .map((action:hitactions.HitLoad)=>action.payload)
  .switchMap(querry=>{
   if(querry===''){
       return empty();
   }
   const nextSearch$=this.actions$.ofType(hitactions.ActionTypes.HIT_LOAD).skip(1);
  
   return this.service.searchHits(this.index,this.type,querry)
   .takeUntil(nextSearch$)
   .map(hits=> new hitactions.HitLoadSuccess(hits))
   .catch(()=>of(new hitactions.HitLoadFailed({})));

  })


}
