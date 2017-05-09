import { Injectable } from '@angular/core';
import {News} from "./news";
import {Headers, Http, RequestOptions, Jsonp} from "@angular/http";
import {Trigger} from "./trigger";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SearchNewsService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  // списсок новостей, полученный от вконтакте
  listNews: Array<News>=[];
  public selectedNews: News;
  _listNews: Array<Object>[];
  test: Array<Object>[];


  getListNews(): News[] {
    return this.listNews;
  }


  showNews(_news: News) {
    this.selectedNews=_news;
  }




  addNews(news: News){
    this.listNews.push(news);
  }

  searchNews(searchWords: string): any {
    // результаты поиска по статусам.
    // API в контакте
    let url: string = 'https://api.vk.com/method/newsfeed.search?q=' + searchWords +
      '&access_token=50a1921650a1921650a19216d550fa42dd550a150a1921609aa362989300c665c9dcc9c&callback=JSONP_CALLBACK';
    this.jsonp.request(url, {method: 'Get'})
      .subscribe((res) => {
        this._listNews = res.json()['response'];
        if (this._listNews != undefined && this._listNews.length!=1){
          for (let news of this._listNews) {
            if (news['text'] != undefined) {

              console.log("-------- " + news['text']);
              console.log("-------- " + Number(news['likes'].count));
              // в ответе нет поля extends
              //console.log("-------- " + news['profiles']);
              console.log("-------- " + news['date']);
              let _news = new News(
                {
                  id: 2,
                  liks: Number(news['likes'].count),
                  writer: 'test',
                  text: news['text'],
                  shortText: news['text'].substring(0, 100),
                  list_photo: ['img.jpg', 'img2.jpg'],
                  published: (new Date(1000 * news['date'])).toLocaleString()
                });
                this.addNews(_news);
            }
          }
          this.countRequest(searchWords);
        }
      })
  }

countRequest(searchWords: string) {
  // запись запроса на сервере
  // http://ft.dev.hismith.ru/stat/create/
  let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
  const body = JSON.stringify(new Trigger(searchWords));
  let options = new RequestOptions({headers: headers});
  return this.http.post('https://dubna.tech/test.php', body, {headers: headers})
    .subscribe((res) => {
      this.test = res.json()
    });
}

}

