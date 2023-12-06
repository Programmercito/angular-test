import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {
  messages: Message[] = [];

  constructor() { }
}
