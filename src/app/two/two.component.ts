import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css'],
})
export class TwoComponent implements OnInit {
  count: any;
  constructor(private testService: TestService) {}

  ngOnInit() {
    // this.count = this.testService.counter; //Method1 for to display res by using async pipe
    console.log('coun...', this.count);

    this.testService.counter.subscribe((res: number) => (this.count = res * 2));
  }
}
