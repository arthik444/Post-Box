import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn:boolean=false;
  constructor(private router:Router) { }

  onLogin(){
    this.isLoggedIn=true;
    this.router.navigateByUrl('/home/tabs/account');
  }

  onSignUp(){
    this.isLoggedIn=true;
    this.router.navigateByUrl('/home/tabs/account');
  }
}
