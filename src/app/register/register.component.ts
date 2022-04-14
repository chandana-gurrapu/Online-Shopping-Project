import { Component, OnInit} from '@angular/core';
import{FormGroup,Validators,FormControl}from '@angular/forms';
import { ApiService } from '../service/api.service';
import { User } from './user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements  OnInit{
myform:NgForm;
fname:string="";
email:string="";
mobile:number;
gen:string="";
password:string="";
adrs:string="";
user:User;
msg:string="";
flag:boolean=false;

  constructor(private userservice:ApiService) { 
  }
  store(data:any){
    console.log(data.value);
    this.fname=data.value.fname;
    this.email=data.value.email;
    this.mobile=data.value.mobile;
    this.gen=data.value.gen;
    this.password=data.value.password;
    this.adrs=data.value.adrs;
    this.user=new User(this.fname, this.email,this.mobile,this.gen,this.password,this.adrs);
    this.userservice.saveUsers(this.user).subscribe(res=>{
     data.form.reset();
       this.msg=res;
       this.flag=true;
     
    })
    
  }
  
  ngOnInit(): void {

  }

 
 }
