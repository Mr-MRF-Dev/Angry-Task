import { TestBed } from '@angular/core/testing';

import { NewTaskHandlerService } from './new-task-handler.service';

describe('NewTaskHandlerService', () => {
  let service: NewTaskHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTaskHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
