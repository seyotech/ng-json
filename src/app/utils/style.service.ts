import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private stylesElement: HTMLStyleElement;

  constructor() {
    this.stylesElement = document.createElement('style');
    this.stylesElement.id = 'styles-import';
    document.head.appendChild(this.stylesElement);
  }

  camelCaseToKebabCase(camelCaseObj: any): string {
    return Object.keys(camelCaseObj)
      .map(key => {
        const kebabCase = key.replace(/[A-Z]/g, match => `-${match.toLowerCase()}`);
        return `${kebabCase}:${camelCaseObj[key]};`;
      })
      .join('\n');
  }

  generateUniqueId(): string {
    return `prefix-${Math.random().toString(36).substring(2, 8)}`;
  }

  exportStyle(selector: string, style: any): void {
    const generatedStyle = this.camelCaseToKebabCase(style);
    this.stylesElement.appendChild(document.createTextNode(`.${selector} {${generatedStyle}}`));
  }
}