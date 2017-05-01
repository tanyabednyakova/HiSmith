export class News {
  // идентификатор
  id: number;
  // количество лайков
  liks: number;
  // автор новости
  writer: string = '';
  // текст новости
  text: string = '';
  // список фотографий
  list_photo: string[];
  // дата публикации
  published: string;
  // TODO тип данных для работы с датой!
  // TODO добавить юниттест



  constructor( values: Object = {} )
  {
    Object.assign( this, values );
  }
}
