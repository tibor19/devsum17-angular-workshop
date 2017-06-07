import { Devsum17TestPage } from './app.po';

describe('devsum17-test App', () => {
  let page: Devsum17TestPage;

  beforeEach(() => {
    page = new Devsum17TestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
