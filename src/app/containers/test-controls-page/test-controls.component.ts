import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import{Observable} from 'rxjs/Observable';
import{Store} from '@ngrx/store'

import {Car} from '../../models/cars'
import * as cars from '../../actions/cars';
import * as fromRoot from '../../reducers';

@Component({
  selector: 'app-test-controls',
  templateUrl: './test-controls.component.html',
  styleUrls: ['./test-controls.component.css']
})
export class TestControlsComponent implements OnInit {
  cars:Observable<Car[]>
  selectedItem:Observable<Car>;
  constructor(private store:Store<fromRoot.State>) { }

  ngOnInit() {
    this.cars=this.store.select(fromRoot.getCars);
    this.selectedItem=this.store.select(fromRoot.getSelectedCar)
    var d=this.selectedItem.subscribe(i=>console.log("i " + i))
    debugger;

  }
  selectedCar(item){
    this.store.dispatch(new cars.CarSelected(item))
  }

}
