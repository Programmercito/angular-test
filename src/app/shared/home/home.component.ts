import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
      },
      {
        label: 'Sign out',
        command: () => this.cerrar()
      }
    ];
  }
  cerrar(): void {
    sessionStorage.removeItem('iniciado');
    this.route.navigate(['/login']);
  }
  constructor(private route: Router) {

  }
  items: MenuItem[] | undefined;
}

