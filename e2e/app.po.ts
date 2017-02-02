import { browser, element, by } from 'protractor';

export class NgBook2InventoryPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
