import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'

import * as fromRoot from '../../reducers';
import * as tablayout from '../../actions/tablayout';


@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  $index:Observable<number>;

  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
  this.$index=this.store.select(fromRoot.getTabLayoutIndex);
  }
  getindex(event:number){
    this.store.dispatch(new tablayout.SelectIndexTabAction(event))
    
  }
}
