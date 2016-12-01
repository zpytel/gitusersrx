import { Component, OnInit } from '@angular/core';
import{Store} from '@ngrx/store'
import {go, replace, search, show, back, forward} from "@ngrx/router-store"

import * as fromRoot from '../../reducers';


@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.css']
})
export class NotFoundPageComponent implements OnInit {

  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
  }
  newPath(){
   this.store.dispatch(go(['/book/3',{routeParam:1}],{query:'string'}));
  }
  goToPath(){
   this.store.dispatch(replace(['/book/23'],{query:'string'}))
  }
}
