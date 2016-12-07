import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-search',
  templateUrl: './car-search.component.html',
  styleUrls: ['./car-search.component.css']
})
export class CarSearchComponent implements OnInit {

  constructor() { }
  @Input() query: string = '';
  @Input() searching = false;
  @Output() search = new EventEmitter<string>();
  ngOnInit() {
  }

}
