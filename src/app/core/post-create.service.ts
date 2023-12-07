import { Injectable } from '@angular/core';
import { Post } from '../model/post.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostCreateService {
  url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpclient: HttpClient) { }
  agregarArray(este: Post, lista: Post[]) {
    lista.unshift(este);
  }
  createApiPost(post: Post): Observable<Post> {
    return this.httpclient.post<Post>(this.url, post);
  }
}
