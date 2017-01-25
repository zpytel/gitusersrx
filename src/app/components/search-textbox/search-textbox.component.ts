import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-textbox',
  templateUrl: './search-textbox.component.html',
  styleUrls: ['./search-textbox.component.css']
})
export class SearchTextboxComponent implements OnInit {

  constructor() { }
  @Input() query: string = '';
  @Input() searching:boolean;
  @Input() placeholder="not specified"
  @Output() search = new EventEmitter<string>();
  ngOnInit() {
  }

}
