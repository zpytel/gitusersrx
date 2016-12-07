import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'
import 'rxjs/add/operator/let';
import 'rxjs/add/operator/take';

import {Car} from '../../models/cars'
import * as cars from '../../actions/cars';
import * as search from '../../actions/search'
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-test-controls',
  templateUrl: './test-controls.component.html',
  styleUrls: ['./test-controls.component.css']
})
export class TestControlsComponent implements OnInit {
  carlist:Observable<Car[]>
  selectedItem:Observable<number>;
  selecteCar:Observable<Car>;

  searchQuery$: Observable<string>;
  loading$: Observable<boolean>;
  
  constructor(private store:Store<fromRoot.State>) { 
      this.carlist=this.store.select(fromRoot.getSearchCarsResult);
      this.searchQuery$ = store.select(fromRoot.getSearchQuery).take(1);
     this.loading$ = store.select(fromRoot.getSearchLoaded);
  }

  ngOnInit() {
    
    this.selectedItem=this.store.select(fromRoot.getSelecteCarId);
    this.selecteCar=this.store.select(fromRoot.getSelectedCar);
    
    

  }
  selectedCar(item){
    this.store.dispatch(new cars.CarSelected(item))
    
   
  }

   search(query: string) {
     
    this.store.dispatch(new search.SearchAction(query));
  }

}
