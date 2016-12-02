import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor() { }
  @Input()items:Array<string>;
  @Output()selected=new EventEmitter<string>();
  ngOnInit() {
  }
  selectedItem(item:string){
    this.selected.emit(item)
  }
}
