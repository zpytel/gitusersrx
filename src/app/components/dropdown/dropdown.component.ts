import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import {Car} from '../../models/cars'

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }
  @Input()items:Car[];
  @Input()valueselected:Car
  @Output()selected=new EventEmitter<string>();
  ngOnInit() {
  }
  selectedItem(item:string){
    this.selected.emit(item)
  }
}
