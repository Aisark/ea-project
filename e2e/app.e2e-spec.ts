import { EaProjectPage } from './app.po';

describe('ea-project App', () => {
  let page: EaProjectPage;

  beforeEach(() => {
    page = new EaProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
