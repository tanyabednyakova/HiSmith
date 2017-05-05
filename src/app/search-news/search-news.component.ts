import { Component, OnInit } from '@angular/core';
import {SearchNewsService} from "../search-news.service";

@Component({
  selector: 'app-search-news',
  templateUrl: './search-news.component.html',
  styleUrls: ['./search-news.component.css']
})
export class SearchNewsComponent implements OnInit {

  searchWords="";
  count: number;
  constructor(private searchNewsService: SearchNewsService) { }


  ngOnInit() {

  }
searchNews() {
  this.searchNewsService.SearchNews(this.searchWords).subscribe((data) => {this.count=data});
  console.log(this.count);
}

  // submit(searchWords){
  //   this.searchNewsService.SearchNews(searchWords);
  //    // .subscribe((data) => {this.receivedUser=data; this.done=true;});
  // }
}
