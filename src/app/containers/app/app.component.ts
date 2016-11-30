import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openSidenav(){

  }
  closeSidenav(){
    
  }
}
