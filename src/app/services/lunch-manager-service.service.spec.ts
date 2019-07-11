import { TestBed } from '@angular/core/testing';

import { LunchManagerServiceService } from './lunch-manager-service.service';

describe('LunchManagerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LunchManagerServiceService = TestBed.get(LunchManagerServiceService);
    expect(service).toBeTruthy();
  });
});
