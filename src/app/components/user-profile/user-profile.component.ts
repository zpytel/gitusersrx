import { Component, OnInit,Input } from '@angular/core';
import {User} from '../../models/auth.model'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor() { }
  @Input() user:User;
  ngOnInit() {
  }

}
