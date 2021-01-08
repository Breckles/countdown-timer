import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlipDialComponent } from './flip-timer/flip-dial/flip-dial.component';
import { FlipClockComponent } from './flip-timer/flip-clock.component';
import { HeightDivisibleByFourDirective } from './flip-timer/flip-dial/height-divisible-by-four.directive';
import { EvenWidthDirective } from './flip-timer/flip-dial/even-width.directive';
import { TextFitsContainerDirective } from './shared/directives/text-fits-container.directive';

@NgModule({
  declarations: [
    AppComponent,
    FlipDialComponent,
    FlipClockComponent,
    HeightDivisibleByFourDirective,
    EvenWidthDirective,
    TextFitsContainerDirective,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
