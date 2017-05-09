export class News {
  // идентификатор
  id: number;
  // количество лайков
  liks: number;
  // автор новости
  writer: string = '';
  // текст новости
  text: string = '';
  // сокрашенный текст новости
  shortText: string = '';
  // url фотографии
  urlPhoto_big: string;
  urlPhoto_small: string;
  // дата публикации
  published: string;

  constructor( values: Object = {} )
  {
    Object.assign( this, values );
  }
}
