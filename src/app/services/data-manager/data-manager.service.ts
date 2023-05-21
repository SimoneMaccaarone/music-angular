import { Injectable } from '@angular/core';
import { Strumento } from '../models/strumento';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService {

  strumenti: Strumento[];

  constructor() {

    this.strumenti = [
      {
        nome: 'Chitarra Acustica',
        tipo: 'Strumento a corde',
        prezzo: 250
      },
      {
        nome: 'Pianoforte',
        tipo: 'Strumento a corde percosse',
        prezzo: 1000
      },
      {
        nome: 'Saxofono',
        tipo: 'Strumento a fiato',
        prezzo: 170
      },
      {
        nome: 'Flauto dolce',
        tipo: 'Strumento a fiato',
        prezzo: 12
      },

    ]



  }

}
