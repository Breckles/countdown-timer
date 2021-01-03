import { Component } from '@angular/core';
import { DialValues } from './flip-timer/flip-timer.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  dialValues: DialValues = { days: 8, hours: 23, minutes: 55, seconds: 41 };
}
