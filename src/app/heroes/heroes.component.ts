import { Component, OnInit } from '@angular/core';

import { Heroe } from '../heroe'
import {HEROES} from '../mock-heroes'
import { HeroeService } from '../heroe.service';
import { MensajeService } from '../mensaje.service';

import { of } from 'rxjs';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroeSeleccionado?: Heroe

  heroes : Heroe[] = []
  
  cogerHeroes(): void{
    this.heroeService.cogerHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  heroe : Heroe = {
    id:1,
    nombre: 'Tormentoso'
  }

  constructor(private heroeService: HeroeService, private mensajeService: MensajeService) { }

  ngOnInit(): void {
    this.cogerHeroes()
  }

  seleccionado(heroe : Heroe): void{
    this.heroeSeleccionado = heroe
    this.mensajeService.añadir(`ComponenteHeroes: Heroe seleccionado id=${heroe.id}`)
  }


}
