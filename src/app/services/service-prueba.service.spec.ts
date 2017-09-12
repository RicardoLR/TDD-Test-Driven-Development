import { TestBed, inject } from '@angular/core/testing';

import { ServicePruebaService } from './service-prueba.service';
import {Todo} from '../models/todo'

import { HttpModule } from '@angular/http';

describe('ServicePruebaService', () => {
	
	const estadobien = {
		name:"ricardo",      
		status: 202,
		data: "correcto",
		isLoggedIn: true
	}
	
	const estadomal = {
		name:"desconocido",      
		status: 404,
		data: "error",
		isLoggedIn: false      
	}

	const mockapi = {
		"userId": 1,
		"id": 1,
		"title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
		"body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
	}

	beforeEach(() => {
		TestBed.configureTestingModule({
			providers: [ServicePruebaService],
			imports: [HttpModule]      
		});
	});

	it('Creacion de servicio', inject([ServicePruebaService], (service: ServicePruebaService) => {
		expect(service).toBeTruthy();
	}));

	it('Peticion correcta: estado bien', inject([ServicePruebaService], (service: ServicePruebaService) => {
		expect(service.getLogin( { "name":"ricardo","age":30} )).toEqual(estadobien);
	}));

	it('Peticion incorrecta: estado mal', inject([ServicePruebaService], (service: ServicePruebaService) => {
		expect(service.getLogin( { "name":"Jodsfshn","age":330} )).toEqual(estadomal);
	}));


	it('Peticion a API externa por ID', inject([ServicePruebaService], (service: ServicePruebaService) => {
	 
		expect( service.getValoresById(1).subscribe( (res: Todo) => {
			expect(res.userId).toBe(1);
			expect(res.id).toBe(1);
		}));
			
	}));


	it('Peticion a API externa', inject([ServicePruebaService], (service: ServicePruebaService) => {
		
		expect( service.getValores().subscribe( (res: Todo[]) => {
			expect(res.length).toBe(100);
			expect(res[0].id).toBe(1);
		}));
			 
	}));


	it('Revicion de token en localstorage', inject([ServicePruebaService], (service: ServicePruebaService) => {
		expect( service.getLocalToken()).toEqual('ricardo');

		afterEach(() => { 
			localStorage.removeItem('mitoken');
		});
	}));


});
