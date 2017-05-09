export class News {
  // идентификатор
  id: number;
  // количество лайков
  liks: number;
  // автор новости
  writer: string = '';
  // текст новости
  text: string = '';
  // текст новости
  shortText: string = '';
  // список фотографий
  //list_photo: string[];
  // дата публикации
  published: string;

  constructor( values: Object = {} )
  {
    Object.assign( this, values );
  }
}
