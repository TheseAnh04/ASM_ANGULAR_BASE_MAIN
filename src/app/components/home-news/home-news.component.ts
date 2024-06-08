import { Component } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrl: './home-news.component.css',
})
export class HomeNewsComponent {
  news = [
    {
      thumbnail: './assets/news-thumbnail-1.png',
      createdAt: '22,oct,2021',
      title: 'Who avoids a pain that produces?',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
      author: 'spacing tech',
    },
    {
      thumbnail: './assets/news-thumbnail-2.png',
      createdAt: '22,oct,2021',
      title: 'Who avoids a pain that produces?',
      description:
        'Lorem ipsum dolor sit amet consectetur. Nec sit enim tellus faucibus bibendum ullamcorper. Phasellus tristique aenean at lorem sed scelerisque.',
      author: 'spacing tech',
    },
  ];
}
