import { Component, OnInit } from '@angular/core';
import {SearchNewsService} from "../search-news.service";
import {News} from "../news";
import {TestApi} from "../TestApi";

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {

  public searchWords: string ="";


  constructor(private searchNewsService: SearchNewsService) { }


  ngOnInit() {}

  dosSearchNews() {
     this.searchNewsService.searchNews(this.searchWords);
    }
}
// TODO сообщение о результате запроса
