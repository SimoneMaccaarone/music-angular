import { Component, Input } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';
import { Chitarre } from 'src/app/services/models/strumento';

@Component({
  selector: 'app-chitarre-detail',
  templateUrl: './chitarre-detail.component.html',
  styleUrls: ['./chitarre-detail.component.scss']
})
export class ChitarreDetailComponent {
  @Input() chitarreDetail?: Chitarre;

  constructor(private dataManagerServ: DataManagerService) { }

}
