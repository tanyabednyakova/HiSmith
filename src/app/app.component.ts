import { Component } from '@angular/core';
import { News } from './News';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  listNews = NEWS;

  selectedNews: News;


  onSelect(news: News): void {
    this.selectedNews = news;
  }

}

const NEWS: News[] = [
  { id: 1,
    liks: 4,
    writer: 'Ivanov',
    text: 'много букв',
    list_photo: ['img.jpg', 'img2.jpg'],
    published: '21.04.2013'
  },

  { id: 2,
    liks: 6,
    writer: 'Petrov',
    text: 'много букв очень много',
    list_photo: ['img.jpg', 'img2.jpg'],
    published: '20.05.2015'
  },

  { id: 3,
    liks: 9,
    writer: 'Orlov',
    text: 'много букв много букв много букв',
    list_photo: ['img.jpg', 'img2.jpg'],
    published: '10.02.2010'
  }

];


