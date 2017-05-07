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

  private listNews: News[] = [
  { id: 1,
    liks: 4,
    writer: 'Ivanov',
    text: 'много букв',
    list_photo: ['img.jpg', 'img2.jpg'],
    published: '21.04.2013'
  },

  { id: 2,
    liks: 6,
    writer: 'Petrov',
    text: 'много букв очень много',
    list_photo: ['img.jpg', 'img2.jpg'],
    published: '20.05.2015'
  },

  { id: 3,
    liks: 9,
    writer: 'Orlov',
    text: 'много букв много букв много букв',
    list_photo: ['img.jpg', 'img2.jpg'],
    published: '10.02.2010'
  }
];

  getListNews(): News[] {
    return this.listNews;
  }

  str: Array<TestApi>[];
  test: Array<Object>[];
  addNews(news: News){
    this.listNews.push(news);
  }

  SearchNews(searchWords: string)
  {
    //this.listNews[0].text=searchWords;

    // рабочий запрос!
    //let url:string = 'https://api.vk.com/method/users.get?user_id=210700286&v=5.52&callback=JSONP_CALLBACK';

    //ошибка - сервер не дает достпа
    let url:string='https://api.vk.com/method/newsfeed.search?q='+searchWords+
      '&access_token=50a1921650a1921650a19216d550fa42dd550a150a1921609aa362989300c665c9dcc9c&callback=JSONP_CALLBACK';
    //   .map((resp:Response)=>resp.json())
    //   .catch((error:any) =>{return Observable.throw(error);});


    // return this.http.post('http://ft.dev.hismith.ru/stat/create/', body , options)
    //   .map((resp:Response)=>resp.json())
    //   .catch((error:any) =>{return Observable.throw(error);});

    this.jsonp.request(url, { method: 'Get' })
    // работает
      .subscribe((res) => {
        this.str = res.json()['response']
      });

    // рабочий
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    const body = JSON.stringify(new Trigger(searchWords));
    let options = new RequestOptions({ headers: headers });
    return this.http.post('https://dubna.tech/test.php', body , { headers: headers })
        .subscribe((res) => {
        this.test = res.json()
        });
        //.map((resp:Response)=>resp.json())
        //.catch((error:any) =>{return Observable.throw(error);});

  //

  }

  showNews(id: number): News{
    return this.listNews[id];
  }

}

