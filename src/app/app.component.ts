import { Component } from '@angular/core';
import { MeService } from './core/messages.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'altacrestita';

  constructor( public messageser: MeService) {
  }
}
