import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { FlipDialComponent } from './flip-dial/flip-dial.component';

export interface DialsInitialValues {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export enum ClockModes {
  clock = 'clock',
  timer = 'timer',
  countdown = 'countdown',
}

/**
 * A flip clock component that can act as a traditional timer, a countdown timer, and a regular clock.
 */
@Component({
  selector: 'app-flip-clock',
  templateUrl: './flip-clock.component.html',
  styleUrls: ['./flip-clock.component.scss'],
})
export class FlipClockComponent implements OnInit, AfterViewInit {
  /**
   * A string representing the mode in which the clock should operate.
   *
   * Options are:
   *
   *  'clock': A regular clock set to the current time. Does not emit alerts.
   *  'timer': A timer that starts at 0 and counts up. An alert is emitted when
   *           the alertTime is reached.
   *  'countdown': A countdown timer that displays the
   *               time remaining until alertTime and counts down. Emits an alarm when the
   *               clock reaches 0.
   *@member {ClockModes} [clockMode='clock']
   */
  @Input()
  clockMode!: ClockModes;

  /**
   * A date object representing the future moment in time when the clock should emit an
   * alert. Defaults to one hour in the future
   * @member {Date} [alertTime=new Date(Date.now() + 1000*60*60)]
   */
  @Input()
  alertTime!: Date;

  /**
   * Generates an event that can be listened to by the parent component.
   */
  @Output()
  emitClockAlert = new EventEmitter<null>();

  @ViewChild('secondsDial')
  secondsDial!: FlipDialComponent;
  @ViewChild('minutesDial')
  minutesDial!: FlipDialComponent;
  @ViewChild('hoursDial')
  hoursDial!: FlipDialComponent;
  @ViewChild('daysDial')
  daysDial!: FlipDialComponent;

  dialsInitialValues!: DialsInitialValues;

  private alertTimeInMs!: number;
  private intervalId!: number;

  textSizeRatio = 0.1;

  constructor() {}

  ngOnInit(): void {
    let days = 0;
    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (!this.clockMode) {
      this.clockMode = ClockModes.clock;
    }
    if (!this.alertTime || this.alertTime.getTime() - Date.now() < 0) {
      this.alertTime = new Date(Date.now() + 1000 * 60 * 60);
    }

    if (this.clockMode === ClockModes.clock) {
      this.alertTimeInMs = 8640000000000000;
      const currentDate = new Date();
      days = 0;
      hours = currentDate.getHours();
      minutes = currentDate.getMinutes();
      seconds = currentDate.getSeconds();
    } else if (this.clockMode === ClockModes.timer) {
      this.alertTimeInMs = this.alertTime.getTime();
    } else if (this.clockMode === ClockModes.countdown) {
      this.alertTimeInMs = this.alertTime.getTime();
      let remainingTime = this.alertTimeInMs - Date.now();
      days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
      remainingTime = remainingTime % (1000 * 60 * 60 * 24);
      hours = Math.floor(remainingTime / (1000 * 60 * 60));
      remainingTime = remainingTime % (1000 * 60 * 60);
      minutes = Math.floor(remainingTime / (1000 * 60));
      remainingTime = remainingTime % (1000 * 60);
      seconds = Math.floor(remainingTime / 1000);
    }

    this.dialsInitialValues = {
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  ngAfterViewInit(): void {
    if (this.clockMode === ClockModes.countdown) {
      this.intervalId = +setInterval(() => this.tickDown(), 1000);
    } else {
      this.intervalId = +setInterval(() => this.tickUp(), 1000);
    }
  }

  private tickUp() {
    this.secondsDial.tickUp();
    this.stopClockIfNecessary();
  }

  private tickDown() {
    this.secondsDial.tickDown();
    this.stopClockIfNecessary();
  }

  private stopClockIfNecessary() {
    if (Date.now() > this.alertTimeInMs - 1000) {
      clearInterval(this.intervalId);
      this.emitClockAlert.emit();
    }
  }

  tickMinutes() {
    setTimeout(() => {
      if (this.clockMode === ClockModes.countdown) {
        this.minutesDial.tickDown();
      } else {
        this.minutesDial.tickUp();
      }
    }, 200);
  }

  tickHours() {
    setTimeout(() => {
      if (this.clockMode === ClockModes.countdown) {
        this.hoursDial.tickDown();
      } else {
        this.hoursDial.tickUp();
      }
    }, 200);
  }

  tickDays() {
    setTimeout(() => {
      if (this.clockMode === ClockModes.countdown) {
        this.daysDial.tickDown();
      } else {
        this.daysDial.tickUp();
      }
    }, 200);
  }
}
