import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authKey="admin"
  isLoggedIn=false;
  apiURL='https://fakestoreapi.com/products/3'
  authVal= "token";

  user:string
  pass:string
  constructor() { }

  isAuthenticated(){
    return this.isLoggedIn
  }


  login(){
    this.isLoggedIn=true
  }

  logout(){
    this.isLoggedIn=false
  }

  tokenResponse(user: string,pass: string)
  {
    this.user=user
    this.pass=pass
  }


}
