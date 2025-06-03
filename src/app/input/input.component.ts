import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from '../utils/style.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  template: `<input [ngClass]="selector" [type]="field.name === 'email' ? 'email' : 'text'" [placeholder]="field.attr.placeholder">`,
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