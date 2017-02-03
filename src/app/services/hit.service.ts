import { Injectable } from '@angular/core';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import {Subject} from 'rxjs/Subject';
import { empty } from 'rxjs/observable/empty';
import {Observable} from 'rxjs/Observable';
import {AngularFire} from 'angularfire2';




import {Hit,Hits,Load} from '../models/hits'
const PATH="search";
const DISEASES="diseases"
@Injectable()
export class HitService{
    constructor(private fb:AngularFire){}

    searchHits(index:string,type:string,val:Load):Observable<Hits>{
    console.log("in serchdisease() " + val.search)
    console.log(val.records)
    //return this.sarch(index,type,search+"*")
      return this.searchDiseases(val.search,val.records)
    }
    searchDiseases(search:string,records:number):Observable<any>{
        var s:string;
        if(search != null)
        {
         s= search.charAt(0).toUpperCase() + search.slice(1).toLowerCase();
        }
        
        return this.fb.database.list(DISEASES,{
            query:{
                limitToFirst:records,
                orderByChild:'text',
                startAt:s,
                endAt:search + "\uf8ff"
                

            
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