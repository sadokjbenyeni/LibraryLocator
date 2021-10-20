import { TestBed } from '@angular/core/testing';

import { LibraryLocatorDataService } from './library-locator-data.service';

describe('LibraryLocatorDataService', () => {
  let service: LibraryLocatorDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibraryLocatorDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
