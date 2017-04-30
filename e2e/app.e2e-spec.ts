import { HiSmithPage } from './app.po';

describe('hi-smith App', function() {
  let page: HiSmithPage;

  beforeEach(() => {
    page = new HiSmithPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
