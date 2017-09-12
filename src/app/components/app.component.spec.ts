
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { By }              from '@angular/platform-browser';
import { DebugElement }    from '@angular/core';


import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';

// servicio a testear
import { ServicePruebaService } from '../services/service-prueba.service';


describe('AppComponent', () => {

  let component:    AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let debug:      DebugElement;
  let elemHTML:      HTMLElement;


  let userServiceStub;
  let userService;


  // antes e cada prueba cree el componente AppComponent
  beforeEach(async(() => {

     // stub UserService for test purposes
     userServiceStub = {
      isLoggedIn: true,
      user: { name: 'richi'}
    };

    TestBed.configureTestingModule({
      imports: [ FormsModule, HttpModule ],
      declarations: [ AppComponent ],

      providers:    [ {provide: ServicePruebaService, useValue: userServiceStub } ]      
    }).compileComponents();
    
    /* Ejemplo de TestBed
     
    TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [
        AppComponent
      ],
      providers:[AppService]
    });
    */

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    debug = fixture.debugElement.query(By.css('h1'));
    elemHTML = debug.nativeElement;

  
    userService = TestBed.get(ServicePruebaService);
  }));


  it('Creacion de componente App', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));


  it(`debe tener como título 'richi'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('richi');
  }));


  it('Debe mostrar en titulo una etiqueta h1', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h4').textContent).toContain('Welcome to richi!');
  }));


  it('Revicion de contenido de elemtnto por ID: mi-div', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    // ya es algo nativo, usamos JS nativo como querySelector
    
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#mi-div').textContent).toContain('testname');
  })); 

  
  it('Contenido h1 debe contener bienvenido', () => {
    fixture.detectChanges();
    const content = elemHTML.textContent;
    expect(content).toContain('bienvenido', 'bienvenido ...');
  });
  
  it('Variable welcome debe ser "ricardo"', () => {
    userService.user.name = 'ricardo';
    fixture.detectChanges();
    expect(elemHTML.textContent).toContain('ricardo');
  });


});
