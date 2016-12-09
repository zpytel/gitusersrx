import { Component, } from '@angular/core';
import {ControlValueAccessor,NG_VALUE_ACCESSOR,NG_VALIDATORS,Validator} from '@angular/forms'

@Component({
  selector: 'app-custom-swithcher',
  templateUrl: './custom-swithcher.component.html',
  styleUrls: ['./custom-swithcher.component.css'],
  providers:[{provide:NG_VALUE_ACCESSOR,multi:true,useExisting:CustomSwithcherComponent}]
})
export class CustomSwithcherComponent implements ControlValueAccessor {
  isOn:boolean=true;
  _onChange:(val:any)=>void;
  state:{[id:number]:string}=
  {0:"pause_circle_outline",1:"pause_circle_filled"};
  icon:string="pause_circle_outline"
  constructor() { }
  writeValue(val:any){
    this.isOn=!!val;
  }
  registerOnChange(fn:(val:any)=>void){
   this._onChange=fn;
  }
  registerOnTouched(){

  }

  toggle(){
    this.isOn=!this.isOn;
    this.isOn?this.icon=this.state[1]:this.icon=this.state[0];
    this._onChange(this.isOn);
  }
}
