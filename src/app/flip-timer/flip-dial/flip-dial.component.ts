import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

/**
 * A flip dial component showing a number. The number ticks up/down with an animation.
 */
@Component({
  selector: 'app-flip-dial',
  templateUrl: './flip-dial.component.html',
  styleUrls: ['./flip-dial.component.scss'],
})
export class FlipDialComponent implements OnInit {
  /**
   * A positive number value to display upon initialization.
   * @member {number} [dialValue=0]
   */
  @Input()
  dialValue!: number;

  /**
   * The maximum value the dial can display. Upon an uptick reset, the dial will
   * reset to 0 after this number. Upon a downtick reset, the dial will reset to
   * this number after 0.
   * @member {number} [dialMaxValue=99]
   */
  @Input()
  dialMaxValue!: number;

  /**
   * Generates an event that can be listened to by the parent. Emits an event
   * whenever the dial resets.
   * @member {EventEmitter<null>}
   */
  @Output()
  dialReset = new EventEmitter<null>();

  dialNextValue!: number;

  flipping = false;

  constructor() {}

  ngOnInit(): void {
    if (!this.dialValue || this.dialValue < 0) {
      this.dialValue = 0;
    }
    if (!this.dialMaxValue) {
      this.dialMaxValue = 99;
    }
  }

  tickUp() {
    this.flipping = true;
    this.dialNextValue = (this.dialValue + 1) % (this.dialMaxValue + 1);

    if (this.dialNextValue === 0) {
      this.dialReset.emit();
    }

    setTimeout(() => {
      this.dialValue = this.dialNextValue;
      this.flipping = false;
    }, 600);
  }

  tickDown() {
    this.flipping = true;
    this.dialNextValue = this.dialValue - 1;

    if (this.dialNextValue < 0) {
      this.dialNextValue = this.dialMaxValue;
      this.dialReset.emit();
    }

    setTimeout(() => {
      this.dialValue = this.dialNextValue;
      this.flipping = false;
    }, 600);
  }
}
