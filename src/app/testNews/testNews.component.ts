import { Component, OnInit } from '@angular/core';
import { TestNewsService } from '../testNews.service';
//import { News } from '../news';


@Component({
  selector: 'app-test-news',
  templateUrl: './testNews.component.html',
  styleUrls: ['./testNews.component.css'],
  providers: [ TestNewsService ]
})

export class TestNewsComponent implements OnInit {
  //exampleNews: News = new News();

  constructor(){}//private TestNews: TestNewsService) {}

  ngOnInit() {
  }

  // getSearchNews()
  // {
  //   this.TestNews.getSearchNews();
  // }

}
