import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Heroe } from '../heroe'
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'app-detalle-heroe',
  templateUrl: './detalle-heroe.component.html',
  styleUrls: ['./detalle-heroe.component.css']
})

export class DetalleHeroeComponent implements OnInit {
  heroe: Heroe | undefined

  
  constructor(
    private route: ActivatedRoute,
    private heroeService: HeroeService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.cogerHeroe()
  }
  cogerHeroe(): void{
    const id= Number(this.route.snapshot.paramMap.get('id'))
    this.heroeService.cogerHeroe(id)
      .subscribe(heroe => this.heroe = heroe)
  }
  goBack(): void{
    this.location.back()
  }

}
