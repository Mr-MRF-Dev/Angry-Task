import { TestBed } from '@angular/core/testing';

import { EditTaskHandlerService } from './edit-task-handler.service';

describe('EditTaskHandlerService', () => {
  let service: EditTaskHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTaskHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
