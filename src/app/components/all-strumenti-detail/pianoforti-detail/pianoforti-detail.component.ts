import { Component, Input } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';
import { Pianoforti } from 'src/app/services/models/strumento';

@Component({
  selector: 'app-pianoforti-detail',
  templateUrl: './pianoforti-detail.component.html',
  styleUrls: ['./pianoforti-detail.component.scss']
})
export class PianofortiDetailComponent {
  @Input() pianofortiDetail?: Pianoforti;

  constructor(private dataManagerServ: DataManagerService) { }

}
