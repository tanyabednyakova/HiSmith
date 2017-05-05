/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SearchNewsService } from './search-news.service';

describe('SearchNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchNewsService]
    });
  });

  it('should ...', inject([SearchNewsService], (service: SearchNewsService) => {
    expect(service).toBeTruthy();
  }));
});
