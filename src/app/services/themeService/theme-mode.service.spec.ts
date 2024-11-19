import { TestBed } from '@angular/core/testing';

import { ThemeModeService } from './theme-mode.service';

describe('ThemeModeService', () => {
  let service: ThemeModeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThemeModeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
