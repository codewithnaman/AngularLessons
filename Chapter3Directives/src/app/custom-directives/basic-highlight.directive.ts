import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[basicHighlightWithYellow]'
})
export class BasicHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }
}
