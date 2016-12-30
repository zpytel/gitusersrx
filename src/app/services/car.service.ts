import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {AngularFire} from 'angularfire2';


import {Car} from '../models/cars'
const PATH="search";
@Injectable()
export class CarService{
    
    constructor(private fb:AngularFire){

    }
    getCars():Observable<Car[]>{
        
        return this.fb.database.list('/cars');
    }
    searchCars(search:string):Observable<Car[]>{
     console.log("in serchcars()")
     return this.sarch("firebase","car",search+"*")
     //return this.fb.database.list('/cars');
     //.map(items=>items.filter((item:Car)=>item.mark.indexOf(search)));
    
    }
    addCar(car:Car):any{
       return this.fb.database.object('/cars').set(car).then(()=>car);
        

    }

    private sarch(index:string,type:string,searchTerm:string):Observable<any>{
        var reqRef=this.fb.database.list(PATH+"/request");
        var keyval=reqRef.push({index:index,type:type,q:searchTerm}).key;
        return this.fb.database.list(PATH+"/response/"+ keyval).map(hit=>{
            hit.reduce((pre:Car[],curr:any)=>{
              return Object.assign(pre,{id:-1,make:curr._source.make,model:curr._source.model})
            },[])
        })
      
    }
   
}