import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/core/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  constructor(private meservice: MessagesService,
    private routes: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log('entrando');
    if (this.validar(this.username, this.password)) {
      sessionStorage.setItem('iniciado', this.username);
      this.meservice.messages = [{ severity: 'success', summary: 'success', detail: 'Usuario correcto ingresando....' }];
      setTimeout(() => {
        this.routes.navigate(['/']);
        this.meservice.messages = [];
      }, 2000);
    } else {
      this.meservice.messages = [{ severity: 'error', summary: 'error', detail: 'Usuario incorrecto verifique' }];
    }
  }
  validar(username: any, password: any): boolean {
    if (username == 'admin' && password == 'admin') {
      return true;
    }
    return false;
  }
}
