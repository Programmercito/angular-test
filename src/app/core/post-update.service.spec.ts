import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostUpdateService } from './post-update.service';
import { Post } from '../model/post.model';

describe('PostUpdateService', () => {
  let service: PostUpdateService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostUpdateService]
    });

    service = TestBed.inject(PostUpdateService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('actualizar post', () => {
    const dummyPost: Post = {
      id: 1,
      userId: 1,
      title: 'updated title',
      body: 'updated body'
    };

    service.modifyApiPost(dummyPost).subscribe(post => {
      expect(post).toEqual(dummyPost);
    });

    const req = httpMock.expectOne(`${service.url}/${dummyPost.id}`);
    expect(req.request.method).toBe('PUT');
    req.flush(dummyPost);
  });

  it('should update post in array', () => {
    const posts = [
      { userId: 2, id: 1, title: 'post 1', body: 'ddd' },
      { userId: 2, id: 2, title: 'post 1', body: 'ddd' }
    ];
    const updatedPost = { userId: 2, id: 1, title: 'ddddd', body: 'ddd' };

    service.modificaArray(updatedPost, posts);

    expect(posts).toContain(updatedPost);
  });
});