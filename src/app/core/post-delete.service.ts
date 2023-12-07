import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostDeleteService {

  constructor(private httpclient: HttpClient) { }

  url = 'https://jsonplaceholder.typicode.com/posts';

  deleteApiPost(id: number): Observable<any> {
    return this.httpclient.delete<any>(this.url + "/" + id);
  }
  
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
