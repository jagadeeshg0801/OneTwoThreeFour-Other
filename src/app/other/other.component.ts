import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styleUrls: ['./other.component.css'],
})
export class OtherComponent implements OnInit {
  constructor(private testService: TestService) {}

  ngOnInit() {}

  setcounter(numb: any) {
    this.testService.setCounter(Number(numb));
  }
}
