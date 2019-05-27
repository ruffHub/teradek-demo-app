import { TestBed } from '@angular/core/testing';

import { TableSortService } from './table-sort.service';

describe('TableSortService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TableSortService = TestBed.get(TableSortService);
    expect(service).toBeTruthy();
  });
});
