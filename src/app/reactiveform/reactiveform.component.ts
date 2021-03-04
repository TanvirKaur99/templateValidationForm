import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';



@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  RegisterForm!:FormGroup;


  constructor(private formbuilder:FormBuilder) {

                                               }

                                               submitted=false
  ngOnInit(): void {
    this.RegisterForm=this.formbuilder.group({
      username:['',Validators.required],
      email:['',Validators.required,Validators.email],
      address:['',Validators.required],
    });
  }

get f(){
  return this.RegisterForm.controls;
}

Onsubmit(){
  this.submitted=true;
  if(this.RegisterForm.invalid)
  return;
}

  // getData(){
  //   console.log(this.RegisterForm.value);
  // }

}
