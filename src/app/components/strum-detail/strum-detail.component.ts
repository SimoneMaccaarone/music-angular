import { Component, Input } from '@angular/core';
import { Strumento } from 'src/app/services/models/strumento';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

@Component({
  selector: 'app-strum-detail',
  templateUrl: './strum-detail.component.html',
  styleUrls: ['./strum-detail.component.scss'],

})
export class StrumDetailComponent {

  @Input() strumentiDetail?: Strumento;  //DETAGLIO


  constructor(private dataManagerServ: DataManagerService) { }



}
