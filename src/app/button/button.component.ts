import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from '../utils/style.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  template: `<button [ngClass]="selector">{{children}}</button>`,
  styles: [],
  imports:[CommonModule]
})
export class ButtonComponent implements OnInit {
  @Input() children: any;
  
  @Input() style: any;
  selector: string;

  constructor(private styleService: StyleService) {
    this.selector = this.styleService.generateUniqueId();
  }

  ngOnInit(): void {
    console.log({t: this.children});
    if (this.style) {
      this.styleService.exportStyle(this.selector, this.style);
    }
  }
}