import { Component, OnInit } from '@angular/core';
import {User} from '../../models/auth.model'
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'


import * as autaction from '../../actions/auth.action';

import * as fromRoot from '../../reducers';


@Component({
  selector: 'app-user-profile-page',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user:Observable<User>;

 
  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
    this.user=this.store.select(fromRoot.getLogonState)
  }

}
