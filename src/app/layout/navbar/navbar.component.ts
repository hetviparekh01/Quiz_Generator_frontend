import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocalstorageService } from 'src/app/core/services/localstorage.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private ls:LocalstorageService,private router:Router){}
  name:string=this.ls.getName() as string
  logout() {
    this.ls.clearLocalstorage();
    this.router.navigate(['/auth/login'])
  }
}
