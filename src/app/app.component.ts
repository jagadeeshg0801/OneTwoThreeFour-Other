import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  tableArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  tableNumber: number = 5;
  userData: any;
  constructor(private http: HttpClient) {
    this.http.get('/assets/usersData.json').subscribe((res) => {
      this.userData = res;
      console.log('userData', this.userData);
    });
  }
}
