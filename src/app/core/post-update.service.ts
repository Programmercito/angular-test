import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostUpdateService {

  constructor() { }
  modificaArray(modified: Post, lista: Post[]) {
    var idToDelete = modified.id;

    var indexToDelete = lista.findIndex(function (item) {
      return item.id === idToDelete;
    });
    lista[indexToDelete] = modified;
  }
}
