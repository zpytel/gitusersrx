import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable'

import {Car} from '../models/cars'

@Injectable()
export class CarService{
    constructor(private http:Http){

    }
    getCars():Observable<Car[]>{
        return this.http.get("localhost:4200/api/cars")
        .map((res:Response)=>res.json())
    }
}