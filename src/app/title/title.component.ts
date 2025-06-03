import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from '../utils/style.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-container *ngIf="element?.titleType">
      <ng-container [ngSwitch]="element.titleType">
        <h1 *ngSwitchCase="'h1'" [ngClass]="selector" [innerHTML]="element.content"></h1>
        <h2 *ngSwitchCase="'h2'" [ngClass]="selector" [innerHTML]="element.content"></h2>
        <h3 *ngSwitchCase="'h3'" [ngClass]="selector" [innerHTML]="element.content"></h3>
        <h4 *ngSwitchCase="'h4'" [ngClass]="selector" [innerHTML]="element.content"></h4>
        <h1 *ngSwitchDefault [ngClass]="selector" [innerHTML]="element.content"></h1>
      </ng-container>
    </ng-container>
  `,
  styles: []
})
export class TitleComponent implements OnInit {
  @Input() element: any;
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