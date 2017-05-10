import { Injectable } from '@angular/core';
import {News} from "./news";
import {Headers, Http, Jsonp} from "@angular/http";
import {QueryInfo} from "./queryInfo";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SearchNewsService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  // списсок новостей, полученный от вконтакте
  listNews: Array<News>=[];
  // выбранная новость
  public selectedNews: News;

  // массив, в который считываются записи из вконтакте
  _listNews: Array<Object>[];

  // номер записи на сервере
  public count: Number;

  getListNews(): News[] {
    return this.listNews;
  }

  getCountQuery(): Number{
    return this.count;
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
        var _news
        this._listNews = res.json()['response'];
        if (this._listNews != undefined && this._listNews.length!=1){
          this.countRequest(searchWords);
          for (let news of this._listNews) {
            if (news['text'] != undefined) {

              console.log("-------- " + news['text']);
              console.log("-------- " + Number(news['likes'].count));
              // в ответе нет поля extends
              //console.log("-------- " + news['profiles']);
              console.log("-------- " + news['date']);
              let temp:string;
              let tempbig: string;
              if(news['attachment']!=undefined && news['attachment']['photo']!= undefined) {
                console.log("---------" + news['attachment']['photo'].src);
                temp = news['attachment']['photo'].src_small;
                tempbig=news['attachment']['photo'].src_big;
              }
              else
              {
                temp=undefined;
                tempbig=undefined;
              }

              _news = new News(
                {
                  id: 2,
                  liks: Number(news['likes'].count),
                  writer: 'writer'+ news['from_id'],
                  text: news['text'],
                  shortText: news['text'].substring(0, 100),
                  urlPhoto_small: temp,
                  urlPhoto_big: tempbig,
                  published: (new Date(1000 * news['date'])).toLocaleString()
                });
                this.addNews(_news);
            }
          }

        }
      })
  }

countRequest(searchWords: string) {
  // ответ сервера, но котором храняться поисковые запросы
  let queryInfo: Array<Object>[];
  // запись запроса на сервере
  // http://ft.dev.hismith.ru/stat/create/
  let headers = new Headers({'Content-Type': 'application/json;charset=utf-8'});
  const body = JSON.stringify(new QueryInfo(searchWords));
  this.http.post('https://dubna.tech/test.php', body, {headers: headers})
    .subscribe((res) => {
      queryInfo = res.json();
      this.count=queryInfo['id'];
      console.log("---------"+this.count);
    });

  }
}

