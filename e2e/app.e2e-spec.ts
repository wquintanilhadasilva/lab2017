import { AulaRotasPage } from './app.po';

describe('aula-rotas App', () => {
  let page: AulaRotasPage;

  beforeEach(() => {
    page = new AulaRotasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
