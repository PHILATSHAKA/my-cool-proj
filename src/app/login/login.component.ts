import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {LoginUserService} from '../login-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private user: LoginUserService ) { }

  ngOnInit() {
  }
  loginUser(use) {
    use.preventDefault();
    const  username = use.target.elements[0].value;
    const password = use.target.elements[1].value;
    if (username === 'pp.tshaka@gmail.com' && password === 'phila') {
      // console.log(username + password);
        this.user.setUserLoggedIn();
        this.router.navigate(['/home']);
      console.log(username + password);
   }else {
     this.router.navigate(['/error']);
   }
  }

}
