import { Component, Input } from '@angular/core';
import { StyleService } from '../utils/style.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule],
  template: `<form [ngClass]="selector"><ng-content></ng-content></form>`,
  styles: []
})
export class FormComponent {
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