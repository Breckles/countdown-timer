import { Component, Input, OnInit } from '@angular/core';

export interface DialValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export enum TimerModes {
  timer = 'timer',
  countdown = 'countdown',
}

@Component({
  selector: 'app-flip-timer',
  templateUrl: './flip-timer.component.html',
  styleUrls: ['./flip-timer.component.scss'],
})
export class FlipTimerComponent implements OnInit {
  @Input()
  dialValues!: DialValues;
  @Input()
  timerMode!: TimerModes;

  constructor() {}

  ngOnInit(): void {
    if (!this.dialValues) {
      this.dialValues = { days: 0, hours: 1, minutes: 0, seconds: 0 };
    }
    if (!this.timerMode) {
      this.timerMode = TimerModes.countdown;
    }

    if (this.timerMode === TimerModes.countdown) {
    } else {
    }
  }
}
