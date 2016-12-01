import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'

import * as layout from '../../actions/layout';
import * as fromRoot from '../../reducers';
@Component({
  selector: 'git-users-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  $showSidenav:Observable<boolean>;
  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
   this.$showSidenav=this.store.select(fromRoot.getShowSidenav)
  }
  openSidenav(){
    this.store.dispatch(new layout.OpenSidenavAction())
  }
  closeSidenav(){
    this.store.dispatch(new layout.CloseSidenavAction())
  }
}
