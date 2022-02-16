import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajeService {
  mensajes: string[] = []

  añadir(mensaje: string){
    this.mensajes.push(mensaje)
  }
  limpiar(){
    this.mensajes = []
  }

  constructor() { }
}
