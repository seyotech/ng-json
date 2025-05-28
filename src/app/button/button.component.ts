// src/app/button/button.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from '../utils/style.service';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button [class]="selector">{{children}}</button>`,
  styles: []
})
export class ButtonComponent implements OnInit {
  @Input() children: any;
  @Input() style: any;
  selector: string;

  constructor(private styleService: StyleService) {
    this.selector = this.styleService.generateUniqueId();
  }

  ngOnInit(): void {
    if (this.style) {
      this.styleService.exportStyle(this.selector, this.style);
    }
  }
}