import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-controls',
  templateUrl: './test-controls.component.html',
  styleUrls: ['./test-controls.component.css']
})
export class TestControlsComponent implements OnInit {
  cars:Array<string>=["corolla","golf"]
  constructor() { }

  ngOnInit() {
  }
  selectedCar(item){
    console.log(item)
  }

}
