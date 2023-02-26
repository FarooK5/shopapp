import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../service/products.service';
import {Router } from '@angular/router'

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
  products:any;
   

  constructor(private service:ProductsService,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.service.getProducts().then(res=>res.json()).then(data=>this.products=data)
    console.log(this.products);
    
  }

  redirectToProductDetail(id:any){
    console.log(id);
    this.router.navigate(["products/",id])
    
  }

  fetchCategory(e:any){
    console.log(e);
    this.service.getProductsByCategoryName(e).then(res=>res.json()).then(data=>this.products=data)
    

  }

}
