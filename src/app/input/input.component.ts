// src/app/input/input.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from '../utils/style.service';

@Component({
  selector: 'app-input',
  standalone: true,
  template: `<input [class]="selector" [type]="field.type" [name]="field.name">`,
  styles: []
})
export class InputComponent implements OnInit {
  @Input() field: any;
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