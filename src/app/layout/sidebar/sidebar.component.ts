import { Component } from '@angular/core';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  constructor(private ls:LocalstorageService){}
  role:string=this.ls.getRole() as string
}
