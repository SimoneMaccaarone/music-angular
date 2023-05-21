import { Injectable } from '@angular/core';
import { Strumenti } from '../models/strumento';
import { Flauto } from '../models/flauto';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  strumenti: Strumenti[];
  flauti: Flauto[];

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
        prezzo: 2000
      },
    ],

    this.flauti = [
      {
        nome: 'Flauto1',
        tipo: 'Tipo1',
        prezzo: 10
      },
      {
        nome: 'Flauto2',
        tipo: 'Tipo2',
        prezzo: 20
    },
    ]
  }
}
