import { Component, OnInit } from '@angular/core';
import{FormBuilder, FormControl,FormGroup, Validators} from '@angular/forms';
import { mustmatch } from 'src/app/helpers/Mustmatch.validators';



@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  RegisterForm!:FormGroup


  constructor(private formbuilder:FormBuilder){}

submitted=false
  ngOnInit(){
    this.RegisterForm=this.formbuilder.group({
      username:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      contact:['',[Validators.required,Validators.pattern("^[6-9][0-9]{9}$")]],
      address:['',Validators.required],
      gender:['',Validators.required],
      location:['',Validators.required],
      terms:['',Validators.required],
      password:['',[Validators.required,Validators.minLength(8)]],
      cpassword:['',Validators.required],

    },
    {
      validator: mustmatch('password','cpassword')
    } )
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
