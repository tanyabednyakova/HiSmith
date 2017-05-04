import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TestNewsComponent } from './testNews/testNews.component';


import { AppComponent } from './app.component';
import { SearchNewsComponent } from './search-news/search-news.component';
import { ListNewsComponent } from './list-news/list-news.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { NewsCardComponent } from './news-card/news-card.component';


@NgModule({
  declarations: [
    AppComponent,
    TestNewsComponent,
    SearchNewsComponent,
    ListNewsComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    NewsCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
