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
  ngOnInit() {
  }
  getIndex(item:MdTabChangeEvent){
    this.tabChanged.emit(item.index);
   
   
  }
}
