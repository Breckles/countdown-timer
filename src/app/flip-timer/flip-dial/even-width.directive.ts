import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appEvenWidth]',
})
export class EvenWidthDirective {
  constructor(private renderer: Renderer2, private hostElRef: ElementRef) {
    this.makeElementWidthEven();
  }

  @HostListener('window:resize') onElementResize() {
    this.makeElementWidthEven();
  }

  private makeElementWidthEven() {
    this.renderer.removeStyle(this.hostElRef.nativeElement, 'width');
    let hostElWidth = Math.floor(
      (this.hostElRef.nativeElement as HTMLElement).offsetWidth
    );
    let evenWidth = hostElWidth + (hostElWidth % 2);

    this.renderer.setStyle(
      this.hostElRef.nativeElement,
      'width',
      `${evenWidth}px`
    );
  }
}
