// src/app/text/text.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from '../utils/style.service';

@Component({
  selector: 'app-text',
  standalone: true,
  template: `<p [class]="selector" [innerHTML]="children"></p>`,
  styles: []
})
export class TextComponent implements OnInit {
  @Input() children: any;
  @Input() style: any;
  @Input() element: any;
  selector: string;

  constructor(private styleService: StyleService) {
    this.selector = `${this.element?.type || 'text'}-${this.styleService.generateUniqueId()}`;
  }

  ngOnInit(): void {
    if (this.style) {
      this.styleService.exportStyle(this.selector, this.style);
    }
  }
}