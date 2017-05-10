import { Component } from '@angular/core';
import { News } from './News';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app works!';
  //listNews = listNews;

  selectedNews: News;

  onSelect(news: News): void {
    this.selectedNews = news;
  }

}




