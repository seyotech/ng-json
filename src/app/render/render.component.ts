import {
  Component,
  Input,
  ViewContainerRef,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { TextComponent } from '../text/text.component';
import { ImageComponent } from '../image/image.component';
import { ButtonComponent } from '../button/button.component';
import { SubscriptionComponent } from '../subscription/subscription.component';
import { CommonModule } from '@angular/common';

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
  template: `<ng-container #container></ng-container>`,
  styles: [],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RenderComponent implements OnInit {
  @Input() element: any;
  private componentMap: { [key: string]: any } = {
    heading: TitleComponent,
    text: TextComponent,
    image: ImageComponent,
    button: ButtonComponent,
    subscription: SubscriptionComponent,
  };

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngOnInit(): void {
    const componentClass = this.componentMap[this.element.type];
    if (componentClass) {
      const componentRef =
        this.viewContainerRef.createComponent<ComponentType>(componentClass);
      const instance = componentRef.instance;
      instance.element = this.element;
      instance.style = this.element.style;

      console.log('Rendering component:', this.element.type, instance, componentRef);
      if (this.element.content) {
        instance.children = this.element.content;
      }
      if (this.element.attr) {
        instance.attr = this.element.attr;
      }
      if (this.element.form) {
        instance.form = this.element.form;
      }
    } else {
      console.warn('No component mapped for type:', this.element.type);
    }
  }
}
