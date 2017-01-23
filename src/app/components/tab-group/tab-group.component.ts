import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import {MdTabChangeEvent} from '@angular/material';
@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent implements OnInit {
  
  constructor() { }

  ngOnInit() {
  }
  @Output() indexChanges=new EventEmitter<number>();
 
  @Input()indexNum:number;

  getIndex(event:MdTabChangeEvent){
    this.indexChanges.emit(event.index);
  }

}
