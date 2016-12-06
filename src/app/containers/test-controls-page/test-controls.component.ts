import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'
import 'rxjs/add/operator/let';

import {Car} from '../../models/cars'
import * as cars from '../../actions/cars';
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
  constructor(private store:Store<fromRoot.State>) { 
      this.carlist=this.store.select(fromRoot.getCarCollection);
      
     
  }

  ngOnInit() {
    
    this.selectedItem=this.store.select(fromRoot.getSelecteCarId);
    this.selecteCar=this.store.select(fromRoot.getSelectedCar);
    
    

  }
  selectedCar(item){
    this.store.dispatch(new cars.CarSelected(item))
    
   
  }

}
