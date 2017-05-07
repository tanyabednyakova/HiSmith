import { Injectable } from '@angular/core';
import {News} from "./news";
import {TestApi} from "./TestApi";
import {Headers, Response, Http, RequestOptions, Jsonp} from "@angular/http";
import {Observable} from "rxjs";
import {Trigger} from "./trigger";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class SearchNewsService {

  constructor(private http: Http, private jsonp: Jsonp) { }

  private listNews: Array<News>=[];
  //listNews: News[] = [];


  getListNews(): News[] {
    return this.listNews;
  }

  _listNews: Array<Object>[];
  str: Array<TestApi>[];
  test: Array<Object>[];

  addNews(news: News){
    this.listNews.push(news);
  }

  SearchNews(searchWords: string)
  {
    // результаты поиска по статусам.
    // API в контакте
    let url:string='https://api.vk.com/method/newsfeed.search?q='+searchWords+
      '&access_token=50a1921650a1921650a19216d550fa42dd550a150a1921609aa362989300c665c9dcc9c&callback=JSONP_CALLBACK';

    this.jsonp.request(url, { method: 'Get' })
      .subscribe((res) => {
        this.str = res.json()['response'];
        this._listNews=res.json()['response'];
        if(this._listNews!=undefined) {
          for (let news of this._listNews) {
            if(news['text']!=undefined) {
              console.log("-------- " + news['text']);
              console.log("-------- " + Number(news['likes'].count));
              // в ответе нет поля extends
              //console.log("-------- " + news['profiles']);
              console.log("-------- " + news['date']);
              let _news = new News(
                {
                  id: 2,
                  liks: Number(news['likes']),
                  writer:'test',
                  text: news['text'],
                  list_photo: ['img.jpg', 'img2.jpg'],
                  published: (new Date(1000*news['date'])).toLocaleString()
            });
              this.addNews(_news);
            }

          }
        }
      })

    // запись запроса на сервере
    // http://ft.dev.hismith.ru/stat/create/
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const body = JSON.stringify(new Trigger(searchWords));
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://dubna.tech/test.php', body , { headers: headers })
        .subscribe((res) => {
        this.test = res.json()
        });
  }

  showNews(id: number): News{
    return this.listNews[id];
  }

}

