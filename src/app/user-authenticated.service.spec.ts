import { TestBed } from '@angular/core/testing';

import { UserAuthenticatedService } from './user-authenticated.service';

describe('UserAuthenticatedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserAuthenticatedService = TestBed.get(UserAuthenticatedService);
    expect(service).toBeTruthy();
  });
});
