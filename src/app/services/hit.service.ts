import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {AngularFire} from 'angularfire2';


import {Hit,Hits} from '../models/hits'
const PATH="search";
@Injectable()
export class HitService{
    constructor(private fb:AngularFire){}
    searchHits(index:string,type:string,search:string):Observable<Hits>{
    console.log("in serchdisease()")
    return this.sarch(index,type,search+"*")
      
    }
  

    private sarch(index:string,type:string,searchTerm:string):Observable<any>{
        var resRef=this.fb.database.object(PATH)
        var keyval=this.fb.database.list(PATH+"/request").push({index:index,type:type,q:searchTerm}).key;
        const val= this.fb.database.list(PATH+"/response/"+ keyval)
        //this.fb.database.object(PATH+"/response/"+ keyval).remove().then(a=>console.log("revoved"))
        resRef.remove().then(a=>console.log("deleted"),err=>console.log(err));
        //console.log(val)
        return val;
    }
   
}