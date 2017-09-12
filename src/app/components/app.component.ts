
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { Component } from '@angular/core';


import { ServicePruebaService } from '../services/service-prueba.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ServicePruebaService]
})
export class AppComponent {
  
  public title:string;
  public name: string = 'testname';

  public sign;

  public bienvenido;


  constructor(private _servicePruebaService: ServicePruebaService) { 
  	this.title = 'richi';
  }

  
  ngOnInit(): void {
    
    this.sign = this._servicePruebaService.getLogin( { "name":"ricardo","age":30} );

    this.bienvenido = this.sign.isLoggedIn ? this.sign.name : 'Debe registrarse.';
  }


  setValue() { this.name = 'Ricardo'; }

}
