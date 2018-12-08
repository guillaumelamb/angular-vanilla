import { AngularVanillaPage } from './app.po';

describe('angular-vanilla App', () => {
  let page: AngularVanillaPage;

  beforeEach(() => {
    page = new AngularVanillaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
