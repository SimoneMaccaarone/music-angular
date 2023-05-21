import { Injectable } from '@angular/core';
import { Strumenti } from '../models/strumento';
import { Chitarre } from '../models/strumento';



@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  strumenti: Strumenti[];
  chitarre: Chitarre[];
  pianoforti: Piranoforti[];

  constructor() {

    this.strumenti = [
      {
        nome: 'strumento1',
        tipo: 'tipo1',
        prezzo: 100
      },
      {
        nome: 'strumento2',
        tipo: 'tipo2',
        prezzo: 200
      },
    ]

    this.chitarre = [
      {
        nome: 'Chitarra1',
        tipo: 'Tipo1',
        prezzo: 10
      },
      {
        nome: 'Chitarra2',
        tipo: 'Tipo2',
        prezzo: 20
      },
    ]

    this.pianoforti = [
      {
        nome: 'PianoForte1',
        tipo: 'Tipo1',
        prezzo: 10
      },
      {
        nome: 'Pianoforte2',
        tipo: 'Tipo2',
        prezzo: 20
      },
    ]


  }
}
