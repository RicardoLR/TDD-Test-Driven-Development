import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitlePage() {
    return element(by.css('app-root h1')).getText();
  }


  getIdName() {
    return element(by.id('mih3') ).getText();
  }



}
