import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import {MdTabChangeEvent,MdRadioChange} from '@angular/material'
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  @Input()selectedIndex:number;
  @Output()tabChanged=new EventEmitter<number>();
  

  @Input() query: string = '';
  @Input() searching = false;
  @Input() placeholder="search text";
  @Input() recPerPage:number;
  @Output() search = new EventEmitter<string>();
  @Output() recordsNum=new EventEmitter<string>();
  
 recperpage = [
    {value:10,selected:false},
    {value:15,selected:false},
    {value:20,selected:false},
   
  ];
   

  ngOnInit() {
   this.recperpage.map((val)=>{
     if(this.recPerPage==val.value){
       val.selected=true;
     }
   })
  }
  getIndex(item:MdTabChangeEvent){
    this.tabChanged.emit(item.index);
   
   
  }
  getRecord(val:MdRadioChange){
    this.recordsNum.emit(val.value)
  }
  getSearch(val){
     this.search.emit(val)
     
  }
}
