import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RenderComponent } from './render/render.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RenderComponent],
  templateUrl: './app.component.html',
  styles: []
})

export class AppComponent implements OnInit {
  elements: any[] = [];

  constructor(private http: HttpClient) {}
  
  ngOnInit(): void {
    this.http.get<any[]>('assets/initialData.json').subscribe({
      next: (data) => {
        console.log('Data fetched:', data);
        this.elements = data;
      },
      error: (error) => {
        console.error('Error fetching initialData.json:', error);
      }
    });
  }
}