import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  logform=new FormGroup(
    {
      "username":new FormControl("",Validators.required),
      "password":new FormControl("",Validators.required),
    }
  )

  constructor(private service:ProductsService,private router:Router) { }

  ngOnInit(): void {
  }

  authenticate(){
    console.log(this.logform.value);
    this.service.getToken(this.logform.value).then(res=>res.json()).
    then(data=>{
      let token="Token"+data.token
      localStorage.setItem("token",token)
      this.router.navigateByUrl("products")
    }
    )
    
  }

}
