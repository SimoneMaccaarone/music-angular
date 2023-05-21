import { Component, Input } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

import { Strumento } from 'src/app/services/models/strumento';
import { Flauto } from 'src/app/services/models/flauto';


@Component({
  selector: 'app-strum-detail',
  templateUrl: './strum-detail.component.html',
  styleUrls: ['./strum-detail.component.scss'],

})
export class StrumDetailComponent {

  @Input() strumentiDetail?: Strumento;  //DETAGLIO
  @Input() flautiDetail?: Flauto;

  constructor(private dataManagerServ: DataManagerService) { }



}
