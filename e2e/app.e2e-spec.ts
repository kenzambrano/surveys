import { SurveysIclfPage } from './app.po';

describe('surveys-iclf App', () => {
  let page: SurveysIclfPage;

  beforeEach(() => {
    page = new SurveysIclfPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
