// src/app/subscription/subscription.component.ts
import { Component, Input, OnInit } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { InputComponent } from '../input/input.component';
import { LabelComponent } from '../label/label.component';
import { ButtonComponent } from '../button/button.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-subscription',
  standalone: true,
  imports: [CommonModule, FormComponent, InputComponent, LabelComponent, ButtonComponent],
  template: `
    <app-form [style]="form.style">
      <ng-container *ngFor="let field of form.fields.items">
        <app-label>{{field.label}}</app-label>
        <app-input [field]="field" [style]="form.fields.style"></app-input>
      </ng-container>
      <app-button [style]="form.submitButton.style" [children]="form.submitButton.content"></app-button>
    </app-form>
  `,
  styles: []
})
export class SubscriptionComponent implements OnInit {
  @Input() form: any;
  constructor() {
    
  }
  ngOnInit(): void {
    console.log(this.form, 'test');
    
  }
  
}