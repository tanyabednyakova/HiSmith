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

  searchWords="";
  count: number;
  user: Array<TestApi>[]=null;
  constructor(private searchNewsService: SearchNewsService) { }


  ngOnInit() {

  }

searchNews() {
  this.searchNewsService.SearchNews(this.searchWords);//.subscribe((data) => {this.count=data});

  if(this.searchNewsService.str) {
    console.log("add :" + this.searchNewsService.test['id']);

    this.user=this.searchNewsService.str;
    for (let entry of this.searchNewsService.str) {
      console.log(entry['id']);
      console.log(entry['first_name']);
    }
  }
}
}
