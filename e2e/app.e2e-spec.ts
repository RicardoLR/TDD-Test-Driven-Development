import { AppPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('pruebas-simples App', () => {
  
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('Ver mensaje de bienvenida', () => {
    page.navigateTo();
    expect(page.getTitlePage()).toEqual('bienvenido a ricardo');
  });

});



describe('Valor dato de controlador a vista', function() {
  it('Definir valor title', function() {

    browser.get("/")
    
    var inputElement = element(by.model('titlename'));
    expect(inputElement).toBeDefined();
  });
});




/** Cambiamos valor con evento click de buton (click) */
describe('Cambiando propiedad Two way, con evento click', function() {

  let page: AppPage;
  
  beforeEach(() => {
    page = new AppPage();
  });
  
  it('Valor por evento', function() {

    page.navigateTo();
    var inputElement = element(by.id('cambiar'))
    
    expect( inputElement.getText() ).toBe('Cambiar valor a name');
    
        
    var idElement = element(by.id('name'))
    
    /** Cambiamos propiedad con evento click de otro elemento */
    inputElement.click();
    
    expect( idElement.getAttribute('value') ).toBe('Ricardo');  
  });

});

