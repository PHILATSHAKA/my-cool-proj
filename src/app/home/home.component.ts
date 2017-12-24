import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
import {trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-home',
  // templateUrl: './home.component.html',
  template: `<p>{{dummyData}}</p>
  <p [@awesome]='state' (click)= "animateMe()">I will animate</p>`,
  styleUrls: ['./home.component.css'],
  animations: [ trigger('awesome', [ state('small', style({transform: 'scale(1)',
  })),
    state('large', style({transform: 'scale(1.2)',
    })),
    transition('small => large', animate('300ms ease-in')),
  ]),
  ]
})
export class HomeComponent implements OnInit {
  state = 'small';
  constructor(private dataService: DataService) {}
  dummyData= '';
  ngOnInit() {
    console.log(this.dataService.cars);
    this.dummyData = this.dataService.carData();
  }
  animateMe() {
    this.state = (this.state === 'small' ? 'large' : 'small');
  }
}
