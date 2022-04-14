import { Component, OnInit } from '@angular/core';
import{FormGroup,Validators,FormControl}from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent implements OnInit {
  title = 'LOGIN PAGE';
  loginform:FormGroup;
  user:string;
  pwd:string;
  buttonDisabled:boolean;
  successMessage:string;
  

  constructor(private route:Router) { 
    this.loginform=new FormGroup({
      emailid:new FormControl(null,[Validators.required,Validators.pattern('[a-zA-z0-9_]*@[a-zA-Z]+[.][a-zA-Z]+')]),
      password:new FormControl(null,[Validators.required,Validators.pattern('[A-Z]{1}[a-za-z0-9]*[@$_]+[a-zA-Z0-9]+')])
    });
  }
  get emailid(){
    return this.loginform.get('emailid');
  }
  get password(){
    return this.loginform.get('password');
  } 
  login(){
    if(this.loginform.value.emailid && this.loginform.value.password){
    alert('successfully login....');
    this.route.navigate(['/login/userdashboard']);
    }
    else{
    alert('login denied...'); 
    }
    this.loginform.reset();
  } 
  ngOnInit() {
    this.buttonDisabled = true;
  }
  checkButton() {
    if (this.loginform.value.emailid && this.loginform.value.password) {
      return false;
    } else {
      return true;
    }
  
  }
}
