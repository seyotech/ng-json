import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StyleService {
  private stylesMap: Map<string, string> = new Map();

  generateUniqueId(): string {
    return 'id-' + Math.random().toString(36).substr(2, 9);
  }

  exportStyle(selector: string, styles: any): void {
    let styleString = '';
    for (const [key, value] of Object.entries(styles)) {
      const kebabKey = key.replace(/([A-Z])/g, '-$1').toLowerCase();
      styleString += `${kebabKey}: ${value}; `;
    }
    this.stylesMap.set(selector, styleString);

    // Create or update style element in the document head
    let styleElement = document.getElementById('dynamic-styles');
    if (!styleElement) {
      styleElement = document.createElement('style');
      styleElement.id = 'dynamic-styles';
      document.head.appendChild(styleElement);
    }

    // Update styles
    const allStyles = Array.from(this.stylesMap.entries())
      .map(([sel, styles]) => `.${sel} { ${styles} }`)
      .join('\n');
    styleElement.textContent = allStyles;
  }
}