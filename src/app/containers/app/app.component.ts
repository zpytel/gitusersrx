import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'

import {User} from "../../models/auth.model"
import * as layout from '../../actions/layout';
import {Auth} from '../../services/auth.service';
import * as fromRoot from '../../reducers';
@Component({
  selector: 'git-users-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
 
})
export class AppComponent implements OnInit {
  $showSidenav:Observable<boolean>;
  $user:Observable<User>;

  
  constructor(private store:Store<fromRoot.State>,private auth:Auth) { }

  ngOnInit() {
   this.$showSidenav=this.store.select(fromRoot.getShowSidenav);
   this.$user=this.store.select(fromRoot.getLogonState)
  }
  openSidenav(){
    this.store.dispatch(new layout.OpenSidenavAction())
  }
  closeSidenav(){
    this.store.dispatch(new layout.CloseSidenavAction())
  }
  clicked(val:string){
    if(val==="login"){
      this.auth.login();
    }else{
      this.auth.logout();
    }
  }
  
}
