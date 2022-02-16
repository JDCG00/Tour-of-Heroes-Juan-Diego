import { Injectable } from '@angular/core';
import { Heroe } from './heroe'
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MensajeService } from './mensaje.service';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  cogerHeroes(): Observable<Heroe[]>{
    const heroes = of(HEROES)
    this.mensajeService.añadir('ServicioHeroes: heroes buscados')
    return heroes
  }
  constructor(private mensajeService: MensajeService) { }
}