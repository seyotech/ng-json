import { Component, Input, ViewContainerRef, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { TextComponent } from '../text/text.component';
import { ImageComponent } from '../image/image.component';
import { ButtonComponent } from '../button/button.component';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { CommonModule } from '@angular/common';
import { StyleService } from '../utils/style.service';

interface ComponentType {
  element?: any;
  style?: any;
  children?: any;
  attr?: any;
  form?: any;
}

@Component({
  selector: 'app-render',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [ngClass]="selector">
      <ng-container *ngIf="isStructuralElement; else renderContent">
        <ng-container *ngFor="let child of element.content">
          <app-render [element]="child"></app-render>
        </ng-container>
      </ng-container>
      <ng-template #renderContent>
        <ng-container #container></ng-container>
      </ng-template>
    </div>
  `,
  styles: []
})
export class RenderComponent implements OnInit {
  @Input() element: any;
  selector: string;
  isStructuralElement: boolean = false;

  private componentMap: { [key: string]: any } = {
    heading: TitleComponent,
    text: TextComponent,
    image: ImageComponent,
    button: ButtonComponent,
    subscription: SubscriptionComponent
  };

  constructor(private viewContainerRef: ViewContainerRef, private styleService: StyleService) {
    this.selector = this.styleService.generateUniqueId();
  }

  ngOnInit(): void {
    // Check if the element is a structural type (section, row, column)
    this.isStructuralElement = ['section', 'row', 'column'].includes(this.element.type);

    if (this.isStructuralElement) {
      // Apply styles for structural elements
      if (this.element.style) {
        this.styleService.exportStyle(this.selector, this.element.style);
      }
    } else {
      // Handle content components (heading, text, image, etc.)
      const componentClass = this.componentMap[this.element.type];
      if (componentClass) {
        const componentRef = this.viewContainerRef.createComponent<ComponentType>(componentClass);
        const instance = componentRef.instance;
        instance.element = this.element;
        instance.style = this.element.style;

        if (this.element.content) {
          instance.children = this.element.content;
        }
        if (this.element.attr) {
          instance.attr = this.element.attr;
        }
        if (this.element.form) {
          instance.form = this.element.form;
        }

        console.log('Rendering component:', this.element.type, instance);
      } else {
        console.warn('No component mapped for type:', this.element.type);
      }
    }
  }
}