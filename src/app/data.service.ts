import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() { }
   cars = ['VW', 'BMW', 'Toyota', 'Ford'];
   carData() {
    return 'This is cars data...!';
   }
}
