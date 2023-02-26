import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  fetchToken(){
    return localStorage.getItem("token")
  }
  
  getProducts(){
    let header=new Headers()
    header.append('Content-Type','application/json')
    let token=this.fetchToken()
    if (token){
      header.append("Authorization",token)
   
    }
    let options:any={
      method:"GET",
      headers:header
    }
    return fetch(`localhost:8000/products/`,options)
    

  }
  

  getProductDetail(id:any){
    return fetch(`https://fakestoreapi.com/products/${id}/`) 
  }


  getcategories(){
    return fetch(`https://fakestoreapi.com/products/categories`)
  }


  getProductsByCategoryName(name:string){
    return fetch(`https://fakestoreapi.com/products/category/${name}`)
  }

  getToken(data:any){
    let header=new Headers()
    header.append('Content-Type','application/json')
    let raw=JSON.stringify(data)
    let options:any={
      method:"POST",
      body:raw,
      headers:header
    }
    return fetch(`localhost:8000/token/`,options)
  }

  constructor() { }


}
