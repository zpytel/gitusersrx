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
     return this.fb.database.list('/cars',{query:{orderByChild:'make',equalTo:search}});
     //.map(items=>items.filter((item:Car)=>item.mark.indexOf(search)));
    
    }
}