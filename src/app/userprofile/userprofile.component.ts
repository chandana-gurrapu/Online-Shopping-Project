import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators} from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent implements OnInit {
  public users:any=[];

  disabled: boolean;
  productForm:FormGroup;
  isCollapsed:boolean=true;
  constructor(private userservice:ApiService) {
    this.productForm=new FormGroup({
      pname:new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z]+')]),
      myemail:new FormControl("",[Validators.required]),
      address:new FormControl("",[Validators.required]),
      num:new FormControl("",[Validators.required,Validators.pattern('[6789]{1}\\d{9}')])

    });
   }
   get pname(){
    return this.productForm.get('pname');
  }
  get myemail(){
    return this.productForm.get('myemail');
  }
  get address(){
    return this.productForm.get('address');
  }
  get num(){
    return this.productForm.get('num');
  }
  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed;
  }
  check(){
    if(this.productForm.value.pname && this.productForm.value.myemail && this.productForm.value.address && this.productForm.value.num){
      return false;
    } else{
      return true;
    }
  }
   add(){
     alert("SUCCESSFULLY SAVED...");
   }
  ngOnInit() {
    this.disabled=true;
    this.userservice.getAllUsers().subscribe(data=>{
      this.users=data;
      console.log(data);
    },error=>{
      console.log(error.message);
  })
  }

}