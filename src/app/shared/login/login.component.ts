import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MeService } from 'src/app/core/messages.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  constructor(private meservice: MeService,
    private routes: Router) { }

  ngOnInit(): void {
  }
  lo() {
    console.log('entrandoc');
  }
  login() {
    console.log('entrando');
    if (this.validar(this.username, this.password)) {
      sessionStorage.setItem('iniciado', this.username);
      this.meservice.messages = [{ severity: 'success', summary: 'success', detail: 'Usuario correcto ingresando....', life:2000 }];
      setTimeout(() => {
        this.routes.navigate(['/home']);
        this.meservice.messages = [];
      }, 2000);
    } else {
      this.meservice.messages = [{ severity: 'error', summary: 'error', detail: 'Usuario incorrecto verifique', life:2000 }];
    }
  }
  validar(username: any, password: any): boolean {
    if (username == 'admin' && password == 'admin') {
      return true;
    }
    return false;
  }
}
