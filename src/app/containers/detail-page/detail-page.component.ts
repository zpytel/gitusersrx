import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import{Store} from '@ngrx/store'
import { go, replace, search, show, back, forward } from '@ngrx/router-store';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.css']
})
export class DetailPageComponent implements OnInit {
  id:string
  constructor(private route:ActivatedRoute,private locaton:Location,private store:Store<any> ) {
    }
  
  ngOnInit() {
    this.route.params.subscribe((p:Params)=>this.id=p['id'])
   
  }

  goBack(){
    this.store.dispatch(back())
  }

}
