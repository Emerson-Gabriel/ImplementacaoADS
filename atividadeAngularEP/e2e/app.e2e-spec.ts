import { EstoqueProdutosPage } from './app.po';

describe('estoque-produtos App', function() {
  let page: EstoqueProdutosPage;

  beforeEach(() => {
    page = new EstoqueProdutosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
