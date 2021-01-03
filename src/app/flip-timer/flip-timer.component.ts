import { Component, Input, OnInit } from '@angular/core';

export interface DialValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'app-flip-timer',
  templateUrl: './flip-timer.component.html',
  styleUrls: ['./flip-timer.component.scss'],
})
export class FlipTimerComponent implements OnInit {
  @Input()
  dialValues!: DialValues;

  constructor() {}

  ngOnInit(): void {}
}
