import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OneComponent } from './one/one.component';
import { TwoComponent } from './two/two.component';
import { TestService } from './test.service';
import { OtherComponent } from './other/other.component';
import { HttpClientModule } from '@angular/common/http';
import { MultiplierPipe } from './multiplier.pipe';
import { HighLightDirective } from './highlight.directive';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    OneComponent,
    TwoComponent,
    OtherComponent,
    MultiplierPipe,
    HighLightDirective,
  ],
  bootstrap: [AppComponent],
  providers: [TestService],
})
export class AppModule {}
