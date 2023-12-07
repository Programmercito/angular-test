import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostCreateService {

  constructor() { }
  agregarArray(este:Post,lista:Post[]){
    lista.unshift(este);
  }
}
