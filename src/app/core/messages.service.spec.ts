import { TestBed } from '@angular/core/testing';

import { MeService } from './messages.service';

describe('MessagesService', () => {
  let service: MeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
