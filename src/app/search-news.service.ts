import { Injectable } from '@angular/core';
import {News} from "./news";
import {Headers, Response, Http} from "@angular/http";
import {Observable} from "rxjs";
import {Trigger} from "./trigger";

@Injectable()
export class SearchNewsService {

  constructor(private http: Http) { }

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

  SearchNews(searchWords: string)
  {
    this.listNews[0].text=searchWords;
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
    // return this.http.get( 'https://api.vk.com/method/newsfeed.search?q='+searchWords+
    //                       '&access_token=50a1921650a1921650a19216d550fa42dd550a150a1921609aa362989300c665c9dcc9',
    //                       { headers: headers }).map(res=>res.json())
    //   .map((resp:Response)=>resp.json())
    //   .catch((error:any) =>{return Observable.throw(error);});

    const body = JSON.stringify(new Trigger(searchWords));

  //   return this.http.post('http://ft.dev.hismith.ru/stat/create/', body , { headers: headers })
  //     .map((resp:Response)=>resp.json())
  //     .catch((error:any) =>{return Observable.throw(error);});
    //
    return this.http.post('https://dubna.tech/test.php', body , { headers: headers })
        .map((resp:Response)=>resp.json())
        .catch((error:any) =>{return Observable.throw(error);});

  }

  addNews(news: News){
    this.listNews.push(news);
  }

  showNews(id: number): News{
    return this.listNews[id];
  }

}

