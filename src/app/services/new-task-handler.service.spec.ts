import { TestBed } from '@angular/core/testing';

import { NewTaskHandlerService } from './new-task-handler.service';

describe('NewTaskHandlerService', () => {
  let service: NewTaskHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewTaskHandlerService);
  });

  it('SHOULD be created WHEN the service is instantiated', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD return a observable WHEN getObservable is called', () => {
    expect(service.getObservable()).toBeTruthy();
  });

  it('SHOULD emit task creation request WHEN requestNewTask is called', (done) => {
    const taskListId = 123;

    service.getObservable().subscribe((emittedTaskListId) => {
      expect(emittedTaskListId).toBe(taskListId);
      done();
    });

    service.requestNewTask(taskListId);
  });

  it('SHOULD call one time the observer WHEN requestNewTask is called', () => {
    const taskListId = 123;
    const observer = jasmine.createSpy();

    service.getObservable().subscribe(observer);
    service.requestNewTask(taskListId);

    expect(observer).toHaveBeenCalledTimes(1);
  });
});
