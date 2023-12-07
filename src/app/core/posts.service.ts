import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Post } from '../model/post.model';
@Injectable({
  providedIn: 'root'
})
export class PostsService {
  url = 'https://jsonplaceholder.typicode.com/posts';
  constructor(
    private httpclient: HttpClient
  ) {

  }

  getPosts(): Observable<Post[]> {
    return this.httpclient.get<Post[]>(this.url);
  }
}
