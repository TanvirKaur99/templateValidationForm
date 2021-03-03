import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hide= true;
  hide1= true;
  contactPattern="^[6-9][0-9]{9}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  model={
    username:'',
    useremail:'',
    useraddress:'',
    userpassword:'',
    usercontact:'',
    location:'',
    terms:'',
    confirmpassword:'',
    gender:'',

  }
  getValues(f:NgForm){
    console.log(f.value);

}
}
