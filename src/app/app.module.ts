import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipDialComponent } from './flip-timer/flip-dial/flip-dial.component';
import { FlipTimerComponent } from './flip-timer/flip-timer.component';

@NgModule({
  declarations: [AppComponent, FlipDialComponent, FlipTimerComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
