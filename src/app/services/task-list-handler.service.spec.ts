import { TestBed } from '@angular/core/testing';

import { TaskListHandlerService } from './task-list-handler.service';

describe('TaskListHandlerService', () => {
  let service: TaskListHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaskListHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
