import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';
import {MdTabChangeEvent} from '@angular/material'
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
  @Input() placeholder="search text"
  @Output() search = new EventEmitter<string>();


  ngOnInit() {
  }
  getIndex(item:MdTabChangeEvent){
    this.tabChanged.emit(item.index);
   
   
  }
  getSearch(val){
     this.search.emit(val)
     
  }
}
