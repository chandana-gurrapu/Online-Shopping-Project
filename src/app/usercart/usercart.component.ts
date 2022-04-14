import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './usercart.component.html',
  styleUrls: ['./usercart.component.css']
})
export class UsercartComponent implements OnInit {
  
  public products : any =[];
  public grandTotal !: number;
 
  constructor(private cartService: CartService) { }

  ngOnInit(): void{
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.grandTotal = this.cartService.getTotalPrice();
    });
  }
   removeItem(item : any){
    this.cartService.removeCartItem(item);
   }
   emptycart(){
     this.cartService.removeAllCart();
   }
}
