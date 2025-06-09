import { TestBed } from '@angular/core/testing';

import { AccessDIalogsService } from './access-dialogs.service';

describe('AccessDIalogsService', () => {
  let service: AccessDIalogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccessDIalogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
