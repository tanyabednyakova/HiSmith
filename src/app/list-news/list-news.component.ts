import { Component, OnInit } from '@angular/core';
import {SearchNewsService} from "../search-news.service";
import {News} from "../news";


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

}
