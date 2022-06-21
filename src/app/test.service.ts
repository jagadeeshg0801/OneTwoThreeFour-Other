import { Injectable } from '@angular/core';
import { Observable, ReplaySubject, Subject } from 'rxjs';
import { count } from 'rxjs/operators';

@Injectable()
export class TestService {
  counter = new ReplaySubject(1);
  constructor() {}

  setCounter(counter: number) {
    this.counter.next(counter);
    this.subject$.next(5);
    this.subject$.next(11);
  }
  subject$ = new Subject<number>();

  public subscriber1 = this.subject$.subscribe((val) => {
    console.log('val', val);
  });
}
