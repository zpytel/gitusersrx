import { GitusersrxPage } from './app.po';

describe('gitusersrx App', function() {
  let page: GitusersrxPage;

  beforeEach(() => {
    page = new GitusersrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
