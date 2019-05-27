import { TestBed } from '@angular/core/testing';

import { RestDataProviderService } from './rest-data-provider.service';

describe('RestDataProviderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestDataProviderService = TestBed.get(RestDataProviderService);
    expect(service).toBeTruthy();
  });
});
