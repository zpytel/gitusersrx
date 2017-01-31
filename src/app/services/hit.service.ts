import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Observable} from 'rxjs/Observable';
import {AngularFire} from 'angularfire2';




import {Hit,Hits} from '../models/hits'
const PATH="search";
const DISEASES="diseases"
@Injectable()
export class HitService{
    constructor(private fb:AngularFire){}

    searchHits(index:string,type:string,search:string):Observable<Hits>{
    console.log("in serchdisease() " + search)
    //return this.sarch(index,type,search+"*")
      return this.searchDiseases(search)
    }
    searchDiseases(search:string):Observable<any>{
        var s= search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();
        return this.fb.database.list(DISEASES,{
            query:{
                limitToFirst:10,
                orderByChild:'text',
                startAt:s,
                endAt:search + 'z'
                

            
            }
        })
    }
  
    /*
databaseReference.orderByChild('_searchLastName')
                 .startAt(queryText)
                 .endAt(queryText+"\uf8ff")
                 .once("value")
*/
    private sarch(index:string,type:string,searchTerm:string):Observable<any>{
        var resRef=this.fb.database.object(PATH)
        var keyval=this.fb.database.list(PATH+"/request").push({index:index,type:type,q:searchTerm}).key;
        const val= this.fb.database.list(PATH+"/response/"+ keyval +"/hits")
        //var response=this.fb.database.object(PATH+"/response/"+ keyval)
        //response.remove().then(a=>console.log("deleted key" + keyval),err=>console.log(err));
        //console.log(val)
        //resRef.remove().then(a=>console.log("deleted key" + keyval),err=>console.log(err));
        //response.update({"":null})
        //this.fb.database.list(PATH+"/response/"+ keyval +"/hits",{})
        return val;
    }
   
}