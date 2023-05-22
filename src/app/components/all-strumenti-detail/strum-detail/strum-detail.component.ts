import { Component, Input } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

import { Chitarre, Pianoforti, Strumenti } from 'src/app/services/models/strumento';




@Component({
  selector: 'app-strum-detail',
  templateUrl: './strum-detail.component.html',
  styleUrls: ['./strum-detail.component.scss'],


})

export class StrumDetailComponent {

  @Input() strumentiDetail?: Strumenti;  //DETAGLIO

images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(private dataManagerServ: DataManagerService) { }



}
