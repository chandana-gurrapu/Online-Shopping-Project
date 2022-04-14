import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-adminproducts',
  templateUrl: './adminproducts.component.html',
  styleUrls: ['./adminproducts.component.css']
})
export class AdminproductsComponent implements OnInit {
  disabled:boolean;
  productForm:FormGroup;
  isCollapsed : boolean = true;
  public productList : any;
  constructor(private api:ApiService) {
    this.productForm=new FormGroup({
      pname:new FormControl("",[Validators.required,Validators.pattern('[a-zA-Z]+')]),
      price:new FormControl("",[Validators.required,]),
      stock:new FormControl("",[Validators.required,]),
      fileOutput:new FormControl("",[Validators.required,]),

    });
   }
   get pname(){
    return this.productForm.get('pname');
  }
  get price(){
    return this.productForm.get('price');
  }
  get stock(){
    return this.productForm.get('stock');
  }
  get fileOutput(){
    return this.productForm.get('fileOutput');
  }

  toggleCollapse(){
    this.isCollapsed=!this.isCollapsed;
  }

  getName(){
    this.productForm.reset();
    alert("PRODUCT ADDED SUCCESFULLY")
  }
  getNameOne(){
    this.productForm.reset();
    alert("PRODUCT UPDATED SUCCESFULLY")
  }

  bob(){
    if(this.productForm.value.pname&&this.productForm.value.price&&this.productForm.value.stock&&this.productForm.value.fileOutput){
    return false;}
    else{
    return true;}
  }

  bobmarle(){
    if(this.productForm.value.pname&&this.productForm.value.price&&this.productForm.value.stock){
    return false;}
    else{
    return true;}
  }

  ngOnInit() {
    this.disabled=true;
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
    })
  }
  }


