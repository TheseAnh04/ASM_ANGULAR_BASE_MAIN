import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrl: './news-item.component.css',
})
export class NewsItemComponent {
  @Input() data!: any;
}
