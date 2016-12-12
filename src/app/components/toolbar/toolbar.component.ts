import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import {Auth} from '../../services/auth.service';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private auth:Auth) { }

  ngOnInit() {
  }

  @Output() openMenu=new EventEmitter();
  

}
