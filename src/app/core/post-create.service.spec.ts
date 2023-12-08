import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostCreateService } from './post-create.service';
import { Post } from '../model/post.model';

describe('PostCreateService', () => {
  let service: PostCreateService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostCreateService]
    });

    service = TestBed.inject(PostCreateService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deberia crear un post', () => { 
    const dummyPost: Post = {
      id: 1,
      userId: 1,
      title: 'Test Post',
      body: 'Test body'
    };
    service.createApiPost(dummyPost).subscribe(createdPost => {
      expect(createdPost).toEqual(dummyPost);
    });
    const req = httpMock.expectOne(service.url);
    expect(req.request.method).toBe('POST');
    req.flush(dummyPost);
  });

  it('should add post to array', () => {
    const posts:Post[] = [];
    const newPost = {id: 1, userId:2,title: 'New Post',body:'body nuevo'}; 
    service.agregarArray(newPost, posts);
    expect(posts.length).toBe(1);
    expect(posts).toContain(newPost);
  });
});