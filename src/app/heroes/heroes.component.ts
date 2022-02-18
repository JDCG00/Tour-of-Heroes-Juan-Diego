import { Component, OnInit } from '@angular/core';

import { Heroe } from '../heroe'
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : Heroe[] = []
  
  constructor(private heroeService: HeroeService) { }

  ngOnInit(): void {
    this.cogerHeroes()
  }

  cogerHeroes(): void{
    this.heroeService.cogerHeroes()
      .subscribe(heroes => this.heroes = heroes)
  } 


}
