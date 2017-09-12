import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable  } from 'rxjs/Observable';


@Injectable()
export class ServicePruebaService {

  constructor(private _http: Http) { }

  /**
   * Llamada a API externa
   */
  getValores(){
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.get("https://jsonplaceholder.typicode.com/posts", {headers: headers})
      .map( res => res.json());
  }

  /**
   * Llamada a API externa
   */
  getValoresById( id:number){
    let headers = new Headers({'Content-Type':'application/json'});

    return this._http.get("https://jsonplaceholder.typicode.com/posts/"+id, {headers: headers})
      .map( res => res.json());
  }

  /**             Simulacion 
   * 
   * De servicio que guarda en localstorage un token con el nombre
   * 
   * @param user_to_register: JSON
   */
  getLogin( user_to_register ){
    
    //let params = JSON.stringify(user_to_register);

    const variables = {
      "name":"ricardo",
      "age":30,
      "cars":[ "Ford", "BMW", "Fiat" ]
    };

    const estadomal = {
      name:"desconocido",      
      status: 404,
      data: "error",
      isLoggedIn: false      
    }
    const estadobien = {
      name:"ricardo",      
      status: 202,
      data: "correcto",
      isLoggedIn: true
    }
    
    if( user_to_register.name != variables.name || user_to_register.age != variables.age )
      return estadomal;

    else{
      localStorage.setItem('mitoken', user_to_register.name)
      return estadobien;
    }

  }

  /**
   * @return mitoken: string
   */
  getLocalToken(){
    return localStorage.getItem('mitoken');
  }

}


