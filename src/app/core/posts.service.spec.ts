import { TestBed } from '@angular/core/testing';

import { PostsService } from './posts.service';
import { HttpClientTestingModule, HttpTestingController } from  '@angular/common/http/testing';
import { Post } from '../model/post.model';

describe('PostsService', () => {
  let service: PostsService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostsService]
    });
    service = TestBed.inject(PostsService);
    httpMock = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });
  it('deberia retornar array', () => {

    const dummyPosts:Post[] = [
      { userId: 1, id: 1, title: 'Hello World', body: 'Lorem ipsum dolor sit amet' },
      { userId: 2, id: 2, title: 'Hello Angular', body: 'Lorem ipsum dolor sit amet' }
    ];

    service.getPosts().subscribe((posts:Post[]) => {
      expect(posts.length).toBe(2);
      expect(posts).toEqual(dummyPosts);
    });

    const request = httpMock.expectOne('https://jsonplaceholder.typicode.com/posts');
    expect(request.request.method).toBe('GET');
    request.flush(dummyPosts);
  });
});
