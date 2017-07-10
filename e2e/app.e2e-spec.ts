import { BuildAPortfolioNd004Page } from './app.po';

describe('build-a-portfolio-nd004 App', () => {
  let page: BuildAPortfolioNd004Page;

  beforeEach(() => {
    page = new BuildAPortfolioNd004Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
