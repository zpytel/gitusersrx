import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {AngularFire} from 'angularfire2';


import {Car} from '../models/cars'

@Injectable()
export class CarService{
    
    constructor(private fb:AngularFire){

    }
    getCars():Observable<Car[]>{
        
        return this.fb.database.list('/cars');
    }
    searchCars(search:string):Observable<Car[]>{
     console.log("in serchcars()")
     return this.fb.database.list('/cars');
     //.map(items=>items.filter((item:Car)=>item.mark.indexOf(search)));
    
    }
}