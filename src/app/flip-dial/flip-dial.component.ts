import {
  Component,
  Input,
  OnInit,
  QueryList,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Component({
  selector: 'app-flip-dial',
  templateUrl: './flip-dial.component.html',
  styleUrls: ['./flip-dial.component.scss'],
})
export class FlipDialComponent implements OnInit {
  @Input()
  number!: number;
  flipping = false;

  constructor() {}

  ngOnInit(): void {}

  startFlipping() {
    setInterval(() => this.onFlip(), 1000);
  }

  onFlip() {
    this.flipping = true;

    setTimeout(() => {
      this.number++;
      this.flipping = false;
    }, 600);
  }
}
