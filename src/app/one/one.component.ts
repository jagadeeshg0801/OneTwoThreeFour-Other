import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css'],
})
export class OneComponent implements OnInit {
  count: any;
  constructor(private testService: TestService) {}

  ngOnInit() {
    this.testService.getCounter().subscribe((res: number) => {
      console.log('number', (this.count = res));
    });
  }
}
