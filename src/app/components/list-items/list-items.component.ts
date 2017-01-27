import { Component, OnInit,EventEmitter,Input,Output} from '@angular/core';
import {MdRadioChange} from '@angular/material'


@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
  
})
export class ListItemsComponent implements OnInit {

  constructor() { }
  @Output()getId=new EventEmitter<string>();
  @Input()hitlist:any;
  ngOnInit() {
  }
  getValue(val:MdRadioChange){
    this.getId.emit(val.value);
  }
}
