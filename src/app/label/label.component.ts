// src/app/label/label.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-label',
  standalone: true,
  template: `<label><ng-content></ng-content></label>`,
  styles: []
})
export class LabelComponent {}