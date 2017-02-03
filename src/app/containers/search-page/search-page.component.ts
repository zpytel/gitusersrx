import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/toPromise';


import {Hit,Hits,Load} from '../../models/hits'

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
 
  query:string;
  records:number;
  
  //searchQuery$: Observable<string>;
  loading$: Observable<boolean>;
   
  constructor(private store:Store<fromRoot.State>) { }

ngOnInit() {
 this.store.select(fromRoot.getRecordsPerPage).subscribe(val=>this.records=val)
 this.hitlist$=this.store.select(fromRoot.getHitSerchedValues);
 //.subscribe(val=>this.hitlist=val)
  this.$index=this.store.select(fromRoot.getTabLayoutIndex);
 // this.searchQuery$ = this.store.select(fromRoot.getHitSearchQuery).take(1);
  this.store.select(fromRoot.getHitSearchQuery).take(1).subscribe(val=>this.query=val)
  this.loading$ = this.store.select(fromRoot.getHitSearchLoaded);
 
  
  }
  getindex(event:number){
    this.store.dispatch(new tablayout.SelectIndexTabAction(event))
    
  }
  unsubscribe(){
   console.log("unsubscribe")
  }
  getRecords(value){
    this.records=parseInt(value)
    if(this.query!=null){
      
    this.store.dispatch(new search.HitLoad({search:this.query,records:value}));
    }
  }
  getValue(value){
    console.log(value)
  }
  getSearch(query:string){
  this.query=query;
   this.store.dispatch(new search.HitLoad({search:query,records:this.records}));
   
  }
}
