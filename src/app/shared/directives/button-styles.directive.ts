import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appButtonStyles]'
})
export class ButtonStylesDirective implements OnInit {
  @Input() fontSize = '19px';
  @Input() margin = '10px';
  @Input() padding = '3px 9px';
  bgColorDefault = 'hsl(57deg 92% 58%)'
  bgColorHover = 'hsl(359deg 94% 42%)'
  bgColorActive = 'hsl(359, 95%, 31%)'
  colorDefault = 'black'

  constructor(
    private element: ElementRef,
    private renderer: Renderer2
  ) { }

  ngOnInit(): void {
    this.renderer.setStyle(this.element.nativeElement, 'font-size', this.fontSize);
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.bgColorDefault);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.colorDefault);
    this.renderer.setStyle(this.element.nativeElement, 'margin', this.margin);
    this.renderer.setStyle(this.element.nativeElement, 'padding', this.padding);
    this.renderer.setStyle(this.element.nativeElement, 'cursor', 'pointer');
    this.renderer.setStyle(this.element.nativeElement, 'border', '2px solid black');
    this.renderer.setStyle(this.element.nativeElement, 'border-radius', '5px');
  }

  @HostListener('mousedown') onMouseDown() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.bgColorActive);
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', 'inset 2px 2px black');
  }

  @HostListener('mouseup') onMouseUp() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.bgColorHover);
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', 'unset');
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.bgColorHover);
    this.renderer.setStyle(this.element.nativeElement, 'color', 'white');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(this.element.nativeElement, 'background-color', this.bgColorDefault);
    this.renderer.setStyle(this.element.nativeElement, 'color', this.colorDefault);
    this.renderer.setStyle(this.element.nativeElement, 'box-shadow', 'unset');
  }

}
