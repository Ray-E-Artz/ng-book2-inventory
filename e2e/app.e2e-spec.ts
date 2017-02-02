import { NgBook2InventoryPage } from './app.po';

describe('ng-book2-inventory App', function() {
  let page: NgBook2InventoryPage;

  beforeEach(() => {
    page = new NgBook2InventoryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
