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
    this.testService.getCounter().subscribe((res: number) => {
      console.log('number', (this.count = res * 2));
    });
  }
}
