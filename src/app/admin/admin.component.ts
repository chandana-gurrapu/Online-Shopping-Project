import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  public users:any=[];
  router: any;

  constructor(private userservice:ApiService) { }

  ngOnInit():void {
    this.userservice.getAllUsers().subscribe(data=>{
    this.users=data;
       console.log(data);
     },error=>{
       console.log(error.message);
   })
  }

  delete(user_id : number){
  this.userservice.deleteUser(user_id).subscribe(data=>{
  this.users=data;
  console.log(data);
  },error=>{
  console.log(error.message);
   })
   this.userservice.getAllUsers().subscribe(data=>{
    this.users=data;
       console.log(data);
   });
  }
  // getAllUsers() {
  //   this.userservice.getAllUsers().subscribe(data=>{
  //   this.users=data;
  //      console.log(data);
  //    },error=>{
  //      console.log(error.message);
  //  })
  // }

}
