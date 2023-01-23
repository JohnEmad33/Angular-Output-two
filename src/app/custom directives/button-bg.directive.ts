import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appButtonBg]',
})
export class ButtonBgDirective {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input() set appButtonBg(condition: boolean) {
    if (condition) {
      this.renderer.setStyle(
        this.element.nativeElement,
        'backgroundColor',
        'orange'
      );
    } else {
      this.renderer.setStyle(
        this.element.nativeElement,
        'backgroundColor',
        'blue'
      );
    }
  }
}
