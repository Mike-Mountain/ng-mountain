import {Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges} from '@angular/core';
import {NgmItemDirection} from "../models/ngm-list.model";
import {NgmColor} from "../../../models/global.model";

@Directive({
  selector: '[ngmListItem]'
})
export class NgmListItemDirective implements OnInit, OnChanges {

  @Input() tagColor: NgmColor;
  @Input() hoverColor: NgmColor;
  @Input() tagPosition: NgmItemDirection;
  @Input() isActive: boolean;

  @HostListener('mouseover')
  onHover() {
    this.setHoverColor();
  }

  @HostListener('mouseout')
  onMouseLeave() {
    this.removeHoverColor();
  }

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
    this.renderer.addClass(this.el.nativeElement, `border-${this.tagPosition}-active`);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.isActive.currentValue === true) {
      this.renderer.setStyle(this.el.nativeElement, 'border-color', `var(--${this.tagColor})`);
      this.renderer.addClass(this.el.nativeElement, 'ngm-list-item-active');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border-color');
      this.renderer.removeClass(this.el.nativeElement, 'ngm-list-item-active');
    }
  }

  setHoverColor() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', `rgba(var(--${this.hoverColor + 'Values'}), 0.6)`);
  }

  removeHoverColor() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }

  getHoverColorValues() {
  }

}
