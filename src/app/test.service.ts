import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { count } from 'rxjs/operators';

@Injectable()
export class TestService {
  counter = new ReplaySubject(1);
  constructor() {}

  setCounter(counter: number) {
    console.log('counter', this.counter);
    this.counter.next(counter);
  }

  // getCounter() {
  //   return this.counter;
  // }
}
