import { TestBed } from '@angular/core/testing';

import { PostDeleteService } from './post-delete.service';

describe('PostDeleteService', () => {
  let service: PostDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
