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
    this.count = this.testService.counter;
    console.log('coun...', this.count);
  }
}
