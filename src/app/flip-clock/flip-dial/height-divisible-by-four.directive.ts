import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHeightDivisibleByFour]',
})
export class HeightDivisibleByFourDirective {
  constructor(private renderer: Renderer2, private hostElRef: ElementRef) {
    this.makeElementHeightEven();
  }

  @HostListener('window:resize') onElementResize() {
    this.makeElementHeightEven();
  }

  private makeElementHeightEven() {
    this.renderer.removeStyle(this.hostElRef.nativeElement, 'height');
    let hostElHeight = Math.floor(
      (this.hostElRef.nativeElement as HTMLElement).offsetHeight
    );
    let heightDivisibleByFour = Math.floor(hostElHeight / 4) * 4;

    this.renderer.setStyle(
      this.hostElRef.nativeElement,
      'height',
      `${heightDivisibleByFour}px`
    );
  }
}
