import { Component } from '@angular/core';
import { DataManagerService } from 'src/app/services/data-manager/data-manager.service';

@Component({
  selector: 'app-strum-list',
  templateUrl: './strum-list.component.html',
  styleUrls: ['./strum-list.component.scss']
})
export class StrumListComponent {


  constructor(public dataManagerServ: DataManagerService){}

}
