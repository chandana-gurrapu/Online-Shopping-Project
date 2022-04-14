import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public users:any=[];

  constructor(private userservice:ApiService) { }

  ngOnInit() {
  //   this.userservice.getAllUsers().subscribe(data=>{
  //     this.users=data;
  //     console.log(data);
  //   },error=>{
  //     console.log(error.message);
  // })
}
}
