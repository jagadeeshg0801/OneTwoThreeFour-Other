import {
  Directive,
  ElementRef,
  ViewContainerRef,
  HostListener,
  HostBinding,
} from '@angular/core';
@Directive({
  selector: '[backGroundHighlight]',
})
export class HighLightDirective {
  @HostBinding('style.border') border: string;
  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(
    private elementRef: ElementRef,
    private containerRef: ViewContainerRef
  ) {}

  @HostListener('mouseover')
  highlight() {
    this.setFontSize('39px');
    this.elementRef.nativeElement.style.cursor = 'pointer';
    this.border = '4px solid pink';
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseout')
  focusOut() {
    this.setFontSize('20px');
    this.border = '';
    this.backgroundColor = '';
  }

  setFontSize(fontSize: string) {
    this.elementRef.nativeElement.style.fontSize = fontSize;
  }
}
