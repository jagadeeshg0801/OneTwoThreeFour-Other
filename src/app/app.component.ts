import { HttpClient } from '@angular/common/http';
import { Component, VERSION } from '@angular/core';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  userData: any;
  constructor(private http: HttpClient) {
    this.http.get('/assets/usersData.json').subscribe((res) => {
      this.userData = res;
      console.log('userData', this.userData);
    });
  }
}
