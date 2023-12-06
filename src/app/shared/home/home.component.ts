import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  implements OnInit {
  ngOnInit(): void {
    this.items = [
      {
        label: 'AltaCREST',
        disabled: true
      },
      {
        label: 'Posts',
        routerLink: 'register/posts'
      },
      {
        label: 'Users',
        routerLink: 'register/users'
      },
      {
        label: 'Contact',
        routerLink: 'register/contact'
      }
    ];
  }
  items: MenuItem[] | undefined;
}

