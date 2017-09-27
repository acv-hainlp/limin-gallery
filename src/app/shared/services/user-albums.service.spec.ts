import { TestBed, inject } from '@angular/core/testing';

import { UserAlbumsService } from './user-albums.service';

describe('UserAlbumsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserAlbumsService]
    });
  });

  it('should be created', inject([UserAlbumsService], (service: UserAlbumsService) => {
    expect(service).toBeTruthy();
  }));
});
