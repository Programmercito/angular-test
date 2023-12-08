import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PostDeleteService } from './post-delete.service';

describe('PostDeleteService', () => {
  let service: PostDeleteService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PostDeleteService]
    });

    service = TestBed.inject(PostDeleteService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('deberia eliminar', () => {
    const id = 1;

    service.deleteApiPost(id).subscribe();

    const req = httpMock.expectOne(`${service.url}/${id}`);
    expect(req.request.method).toBe('DELETE');
  });

  it('deberia eliminar el post del array', () => {
    const posts = [
      { id: 1, userId: 3, title: 'post 1', body: "body 1" },
      { id: 2, userId: 3, title: 'post 2', body: "body 2" }

    ];

    const deletedPost = { id: 2, userId: 3, title: 'post 2', body: "body 2" };

    service.delete(deletedPost, posts);

    expect(posts.length).toBe(1);
    expect(posts).not.toContain(deletedPost);
  });
});