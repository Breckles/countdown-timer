import { Component } from '@angular/core';
import { ClockModes } from './flip-timer/flip-clock.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  // alertTime = new Date(Date.now() + 100000);
  alertTime = new Date(Date.now() + 1000 * 60 * 60 * 24 + 1000);
  clockMode = ClockModes.countdown;

  alert(): void {
    console.log('Clock Stopped!');
  }
}
