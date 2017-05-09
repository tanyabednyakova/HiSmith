import { Component, OnInit } from '@angular/core';
import {SearchNewsService} from "../search-news.service";
import {News} from "../news";
import {NewsCardComponent} from "../news-card/news-card.component";

@Component({
  selector: 'app-list-news',
  templateUrl: './list-news.component.html',
  styleUrls: ['./list-news.component.css']
})
export class ListNewsComponent implements OnInit {

  listNews: News []=[];

  constructor(private searchNewsService: SearchNewsService) {}


   ngOnInit(){
      this.listNews = this.searchNewsService.getListNews();
   }

   doSelectNews(_news: News)
   {
     this.searchNewsService.showNews(_news);
     console.log(_news.text);
   }

}
