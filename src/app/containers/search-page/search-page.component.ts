import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';

import {Hit,Hits} from '../../models/hits'

import * as search from '../../actions/hits.action'


import * as fromRoot from '../../reducers';
import * as tablayout from '../../actions/tablayout';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  $index:Observable<number>;
  hitlist:Hit[];
  
  hitlist$:Observable<Hit[]>
  
  selectedItem:Observable<number>;
 

  searchQuery$: Observable<string>;
  loading$: Observable<boolean>;

  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
 this.hitlist$=this.store.select(fromRoot.getHitSerchedValues);
 //.subscribe(val=>this.hitlist=val)
  this.$index=this.store.select(fromRoot.getTabLayoutIndex);
  this.searchQuery$ = this.store.select(fromRoot.getHitSearchQuery).take(1);
  this.loading$ = this.store.select(fromRoot.getHitSearchLoaded);
  
  
  }
  getindex(event:number){
    this.store.dispatch(new tablayout.SelectIndexTabAction(event))
    
  }
  unsubscribe(){
   console.log("unsubscribe")
  }
  getValue(value){
    console.log(value)
  }
  getSearch(query:string){
   this.store.dispatch(new search.HitLoad(query));
   console.log(query)
  }
}
