import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  count: any;
  constructor(private testService: TestService) {}

  ngOnInit() {
    // this.count = this.testService.counter; //Method1 for to display res by using async pipe
    console.log('coun...', this.count);

    this.testService.counter.subscribe((res: number) => (this.count = res));
  }
}
