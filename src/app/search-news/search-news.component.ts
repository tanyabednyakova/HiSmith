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
  //let user: TestApi = JSON.parse(this.searchNewsService.str);
   //console.log(user.id);
   //console.log(user.first_name);
  //console.log(user.last_name);
  if(this.searchNewsService.str) {
   this.user=this.searchNewsService.str;
    // работатает!
    for (let entry of this.searchNewsService.str) {
      console.log(entry['id']);
      console.log(entry['first_name']);
    }
   // console.log(this.searchNewsService.str);
  }

  //console.log(this.searchNewsService);
}

  // submit(searchWords){
  //   this.searchNewsService.SearchNews(searchWords);
  //    // .subscribe((data) => {this.receivedUser=data; this.done=true;});
  // }
}
