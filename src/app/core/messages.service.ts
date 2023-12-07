import { Injectable } from '@angular/core';
import { Message } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class MeService {
  messages: Message[] = [];

  constructor() { }
}
