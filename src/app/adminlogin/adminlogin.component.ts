import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormControl}from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  title = 'LOGIN PAGE';
  loginform:FormGroup;
  user:string;
  pwd:string;
  buttonDisabled:boolean;
  successMessage:string;

  constructor(private route:Router) { 
    this.loginform=new FormGroup({
      username:new FormControl(null,[Validators.required]),
      password:new FormControl(null,[Validators.required])
    });
  }

  get username(){
    return this.loginform.get('username');
  }
  get password(){
    return this.loginform.get('password');
  } 
  login(){
    if(this.loginform.value.username=="admin" && this.loginform.value.password=="admin@123"){
    alert('successfully login....');
    this.route.navigate(['/login/admindashboard']);
    }
    else{
    alert('login denied....');
    }
    this.loginform.reset();
  } 
  checkButton() {
    if (this.loginform.value.username && this.loginform.value.password) {
      return false;
    } else {
      return true;
    }
  }

  ngOnInit() {
  this.buttonDisabled = true;
  }

}
