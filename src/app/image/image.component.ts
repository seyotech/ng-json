import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from '../utils/style.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image',
  standalone: true,
  template: `<img [ngClass]="selector" [src]="attr.src" [alt]="attr.alt || element.name || 'Image'">`,
  styles: [],
  imports:[CommonModule]
})
export class ImageComponent implements OnInit {
  @Input() attr: any;
  @Input() style: any;
  @Input() element: any;
  selector: string;

  constructor(private styleService: StyleService) {
    const date = new Date().getUTCMilliseconds().toString();
    const id = this.styleService.generateUniqueId() + date;
    this.selector = `${this.element?.type || 'image'}-${id}`;
  }

  ngOnInit(): void {
    if (this.style) {
      this.styleService.exportStyle(this.selector, this.style);
    }
  }
}