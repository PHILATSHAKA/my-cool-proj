import { Component, OnInit } from '@angular/core';
import {LoginUserService} from '../login-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name = 'anonymous';
  constructor(private user: LoginUserService) {}
  ngOnInit() {
    this.name = this.user.username;
  }
}
