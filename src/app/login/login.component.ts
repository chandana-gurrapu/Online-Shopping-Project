import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'LOGIN PAGE';
  loginform:FormGroup;
  user:string;
  pwd:string;

  constructor() { 
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
    this.loginform.reset();
  }
  ngOnInit() {
  }

}
