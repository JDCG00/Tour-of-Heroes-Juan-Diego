import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Heroe } from './heroe';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  crearBD(){
    const heroes = [
      { id: 11, nombre: 'Dr bueno' },
      { id: 12, nombre: 'Narco' },
      { id: 13, nombre: 'Bombasto' },
      { id: 14, nombre: 'Celeroso' },
      { id: 15, nombre: 'Magneto' },
      { id: 16, nombre: 'Hombre goma' },
      { id: 17, nombre: 'Dynamite' },
      { id: 18, nombre: 'Dr Coeficiente' },
      { id: 19, nombre: 'Magma' },
      { id: 20, nombre: 'Tornado' }
    ]
    return {heroes}
  }
  genId(heroes: Heroe[]): number{
    return heroes.length > 0 ? Math.max(...heroes.map(heroe => 
      heroe.id)) + 1 : 11
  }

  constructor() { }
}
