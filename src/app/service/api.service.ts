import { Injectable, Type } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseURL: string = "http://localhost:9001/";

  constructor(private http: HttpClient,private route:Router) {

  }

  getProduct() {
    return this.http.get<any>("https://fakestoreapi.com/products")
      .pipe(map((res: any) => {
        return res;
      }))
  }
  getAllUsers() {
    return this.http.get(this.baseURL + "getallusers");
  }

  deleteUser(user_id:any) {
    console.log(user_id);
    return this.http.delete(this.baseURL + "deleteuser/" + user_id);
    
  }

  saveUsers(user:any){
    console.log(user);
   return  this.http.post(this.baseURL+"saveuser",user,{responseType:'text'});
  }
}
