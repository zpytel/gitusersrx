import { Component, OnInit,EventEmitter,Input,Output } from '@angular/core';

@Component({
  selector: 'app-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() icon: string = '';
  @Input() hint: string = '';
  @Input() routerLink: string | any[] = '/';
  @Output() activate = new EventEmitter();

}
