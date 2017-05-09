import { Component, OnInit } from '@angular/core';
import {SearchNewsService} from "../search-news.service";
import {News} from "../news";

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.css']
})
export class NewsCardComponent implements OnInit {

  constructor(private searchNewsService: SearchNewsService) {}

  news: News;

  ngOnInit() {
    this.news=this.searchNewsService.selectedNews;
  }

  showNwes(id:number){

  }

}
