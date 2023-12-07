import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostDeleteService {

  constructor() { }
  
  delete(post: Post, datos: Post[]) {
    var idToDelete = post.id;

    var indexToDelete = datos.findIndex(function (item) {
      return item.id === idToDelete;
    });

    if (indexToDelete !== -1) {
      datos.splice(indexToDelete, 1);
    }
    return datos;
  }
}
