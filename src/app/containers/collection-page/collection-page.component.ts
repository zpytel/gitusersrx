import { Component, OnInit } from '@angular/core';
import {User} from '../../models/auth.model'
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'


import * as autaction from '../../actions/auth.action';

import * as fromRoot from '../../reducers';


@Component({
  selector: 'app-collection-page',
  templateUrl: './collection-page.component.html',
  styleUrls: ['./collection-page.component.css']
})
export class CollectionPageComponent implements OnInit {
   user:Observable<User>;
  constructor(private store:Store<fromRoot.State>) { }
  
  ngOnInit() {
    this.user=this.store.select(fromRoot.getLogonState)
  }

}
