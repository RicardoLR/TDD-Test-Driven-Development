import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';


describe('Prueba 2', function() {

  let page: AppPage;
  
  beforeEach(() => {
    page = new AppPage();
  });
  
  it('Cambiar valor de Two way binding', function() {

    page.navigateTo();

    var elemInputName = element(by.id('name') );
    expect( elemInputName.getAttribute('value')  ).toBe('testname');

    /*
    browser.executeScript(
      "document.getElementById('name').setAttribute('value','cambiando valor con protector')").
      then(function() {
        expect( elemInputName.getAttribute('value') ).toBe('cambiando valor con protector');          
      });
    */

  });

  
  it("sólo debe activar el botón cuando haya un nuevo título", () => {

    page.navigateTo();
    let button = element(by.css("input[type=submit]"));
    
    expect(button.isEnabled()).toEqual(true);
  })

});



