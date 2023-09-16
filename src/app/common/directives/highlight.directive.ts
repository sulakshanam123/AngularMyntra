import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() enterColor: any;
  @Input() leaveColor: any;

  @HostListener('mouseenter') onMouseEnter () {
    this.highlightBg(this.enterColor);
  }

  @HostListener('mouseleave') onMouseLeave () {
    this.highlight(this.leaveColor);
  }
  
  constructor(private eleRef: ElementRef) { }

  highlight (color: string) {
    this.eleRef.nativeElement.style.color = color;
  }

  highlightBg (color: string) {
    this.eleRef.nativeElement.style.backgroundColor = color;
  }
}
