import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';

import {User} from '../../models/auth.model'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {

  }

  @Output() openMenu=new EventEmitter();
  @Output() clickLink=new EventEmitter<string>();
  @Input()user:User;

}
