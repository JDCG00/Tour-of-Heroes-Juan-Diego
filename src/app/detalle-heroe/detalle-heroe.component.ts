import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../heroe'
import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})

export class DetalleHeroeComponent implements OnInit {
  @Input() heroe?: Heroe
  constructor() { }

  ngOnInit(): void {
  }

}
