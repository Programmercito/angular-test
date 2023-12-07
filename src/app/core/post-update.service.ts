import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class PostUpdateService {

  constructor(private httpclient:HttpClient) { }
  url = 'https://jsonplaceholder.typicode.com/posts';

  modifyApiPost(post:Post): Observable<any> {
    return this.httpclient.put<Post>(this.url+"/"+post.id ,post);
  }
  
  modificaArray(modified: Post, lista: Post[]) {
    var idToDelete = modified.id;

    var indexToDelete = lista.findIndex(function (item) {
      return item.id === idToDelete;
    });
    lista[indexToDelete] = modified;
  }
}
