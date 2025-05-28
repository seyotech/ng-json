// src/app/title/title.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from '../utils/style.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="element?.level">
      <ng-container [ngSwitch]="element.level">
        <h1 *ngSwitchCase="'h1'" [class]="selector" [innerHTML]="children"></h1>
        <h2 *ngSwitchCase="'h2'" [class]="selector" [innerHTML]="children"></h2>
        <h3 *ngSwitchCase="'h3'" [class]="selector" [innerHTML]="children"></h3>
        <h1 *ngSwitchDefault [class]="selector" [innerHTML]="children"></h1>
      </ng-container>
    </ng-container>
  `,
  styles: []
})
export class TitleComponent implements OnInit {
  @Input() children: any;
  @Input() style: any;
  @Input() element: any;
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