import { TestBed } from '@angular/core/testing';

import { GithubapiService } from './githubapi.service';

describe('GithubapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubapiService = TestBed.get(GithubapiService);
    expect(service).toBeTruthy();
  });
});
