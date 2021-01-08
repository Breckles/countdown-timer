import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTextFitsContainer]',
})
/**
 * A directive that dynamically resizes the font-size (in px units) of the
 * element it is applied to. The font-size is calculated as a function of the
 * host elements offSetWidth multiplied by the ratio passed to the directive.
 * @param {number} [ratio=0.5] - The desired ratio. This will be multiplied by
 * the host element's offSetWidth to determine the font-size in px units.
 * Defaults to 0.5.
 */
export class TextFitsContainerDirective implements OnInit {
  @Input('appTextFitsContainer')
  ratio: number | undefined;

  constructor(private renderer: Renderer2, private hostElRef: ElementRef) {}

  ngOnInit(): void {
    if (!this.ratio) {
      this.ratio = 0.5;
    }
    this.setFontSize();
  }

  @HostListener('window:resize')
  private setFontSize(): void {
    const hostWidth = (this.hostElRef.nativeElement as HTMLElement).offsetWidth;

    const fontSize = hostWidth * this.ratio!;

    this.renderer.setStyle(
      this.hostElRef.nativeElement as HTMLElement,
      'font-size',
      `${fontSize}px`
    );
  }
}
