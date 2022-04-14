import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartService } from '../service/cart.service';


@Component({
  selector: 'app-home',
  templateUrl: './userhome.component.html',
  styleUrls: ['./userhome.component.css']
})
export class UserhomeComponent implements OnInit {
 
  public productList : any ;
  public filterCategory : any;
  public searchTerm !: string ;
  searchKey:string = "";
  constructor(private api:ApiService, private cartService : CartService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList=res;
      this.filterCategory=res;
       this.productList.forEach((a:any)=>{
         if(a.category ==="women's clothing"  ||  a.category==="men's clothing"){
           a.category = "fashion"
         }
         Object.assign(a,{Quantity:1,Total:a.price});
       });
       console.log(this.productList)
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
    this.cartService.search.next(this.searchTerm);
  }
   addtoCart(item :any){
    this.cartService.addtoCart(item);
   }
   filter(category:string){
     this.filterCategory = this.productList
     .filter((a:any)=>{
        if(a.category == category || category==''){
          return a;
        }
     })
   }

}