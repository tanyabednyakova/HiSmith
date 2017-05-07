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
  addNews(news: News){
    this.listNews.push(news);
  }

  SearchNews(searchWords: string)
  {
    //this.listNews[0].text=searchWords;

    // рабочий запрос!
    let url:string = 'https://api.vk.com/method/users.get?user_id=210700286&v=5.52&callback=JSONP_CALLBACK';
    // people: Array<Object>;
    // let url:string = 'https://api.vk.com/method/users.get?user_id=210700286&v=5.52&callback=JSONP_CALLBACK';
    // return this.jsonp.request(url, { method: 'Get' }).toRx().subscribe(res => {
    // this.people = res.json();



    //.subscribe((res) => {res.json()
    //});
    //let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });


    //ошибка - сервер не дает достпа
    // return this.http.get( 'https://api.vk.com/method/newsfeed.search?q='+searchWords+
    //                       '&access_token=50a1921650a1921650a19216d550fa42dd550a150a1921609aa362989300c665c9dcc9c').map(res=>res.json())
    //   .map((resp:Response)=>resp.json())
    //   .catch((error:any) =>{return Observable.throw(error);});

    // let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    // const body = JSON.stringify(new Trigger(searchWords));
    // let options = new RequestOptions({ headers: headers });
    // return this.http.post('http://ft.dev.hismith.ru/stat/create/', body , options)
    //   .map((resp:Response)=>resp.json())
    //   .catch((error:any) =>{return Observable.throw(error);});

    // рабочий
    // return this.http.post('https://dubna.tech/test.php', body , { headers: headers })
    //     .map((resp:Response)=>resp.json())
    //     .catch((error:any) =>{return Observable.throw(error);});

    return this.jsonp.request(url, { method: 'Get' })
      // работает
      .subscribe((res) => {
      this.str = res.json()['response']
      });

  }

  showNews(id: number): News{
    return this.listNews[id];
  }

}

