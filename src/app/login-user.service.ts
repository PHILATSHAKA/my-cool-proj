import { Injectable } from '@angular/core';

@Injectable()
export class LoginUserService {
 private isUserLoggedIn;
 public username;
 constructor() {
   this.isUserLoggedIn = false;
 }
 setUserLoggedIn() {
   this.isUserLoggedIn = true;
   this.username = 'pp.tshaka@gmail.com';
}
 getUserLoggedIn() {
   return this.isUserLoggedIn;
  }
}
