import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label',
  standalone: true,
  imports: [CommonModule],
  template: `<label>{{children}}</label>`,
  styles: []
})
export class LabelComponent {
  @Input() children: any;
}