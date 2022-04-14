import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-adminusers',
  templateUrl: './adminusers.component.html',
  styleUrls: ['./adminusers.component.css']
})
export class AdminusersComponent implements OnInit {
  public users:any=[];

  constructor(private userservice:ApiService) { }

  ngOnInit() {
    this.userservice.getAllUsers().subscribe(data=>{
    this.users=data;
       console.log(data);
     },error=>{
       console.log(error.message);
   })
  }

  delete(user_id:number){
  this.userservice.deleteUser(user_id).subscribe(data=>{
  this.users=data;
  console.log(data);
  // this.getAllUsers();
  },error=>{
  console.log(error.message);
   })
  }

}
