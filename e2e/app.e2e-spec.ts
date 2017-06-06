import { TryTwoPage } from './app.po';

describe('try-two App', () => {
  let page: TryTwoPage;

  beforeEach(() => {
    page = new TryTwoPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
