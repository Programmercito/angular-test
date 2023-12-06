import { Component } from '@angular/core';
import { MessagesService } from './core/messages.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'altacrestita';

  constructor( public messageser: MessagesService) {
  }
}
