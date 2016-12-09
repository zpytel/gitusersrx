import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder,ValidatorFn, FormControl, FormGroup,FormGroupName, Validators } from '@angular/forms';

function passwordMatcher(c:AbstractControl){
  return c.get('pass').value===c.get('confirm').value?null:{'nomatch':true}
}

@Component({
  selector: 'app-add-car-form',
  templateUrl: './add-car-form.component.html',
  styleUrls: ['./add-car-form.component.css']
})
export class AddCarFormComponent implements OnInit {
  form:FormGroup;
  constructor(public fb:FormBuilder) { 
   this.form=this.fb.group({
    mark:'',
    model:'',
    account:this.fb.group({
      user:['',Validators.required],
      pass:['',Validators.required],
      confirm:['',Validators.required],
      switcher:[false]
    },{validator:passwordMatcher}),
      
   });
   this.form.patchValue({mark:"Ferrari",model:"Diablo"});

  }
    
  ngOnInit() {
  }

}
