import {Directive, ElementRef, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[ngmResize]'
})
export class NgmResizeDirective implements OnInit {

  constructor(private el: ElementRef,
              private renderer: Renderer2) {
  }

  ngOnInit(): void {
  }

}
