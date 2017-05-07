export class TestApi {
  first_name: string;
  id: number;
  last_name: string;

  constructor( values: Object = {} )
  {
    Object.assign( this, values );
  }
}
