import { TestBed } from '@angular/core/testing';

import { EditTaskHandlerService } from './edit-task-handler.service';
import { TaskList } from '../models/task_list';
import { Task } from '../models/task';

describe('EditTaskHandlerService', () => {
  let service: EditTaskHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditTaskHandlerService);
  });

  it('SHOULD be created WHEN the service is instantiated', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD return an observable WHEN getObservable is called', () => {
    expect(service.getObservable()).toBeTruthy();
  });

  it('SHOULD emit task edit request WHEN requestEditTask is called', (done) => {
    const taskListId: TaskList['id'] = 123;
    const task: Task = { id: 234, title: 'Test Task', completed: false };

    service.getObservable().subscribe(([emittedTaskListId, emittedTask]) => {
      expect(emittedTaskListId).toBe(taskListId);
      expect(emittedTask).toEqual(task);
      done();
    });

    service.requestEditTask(taskListId, task);
  });

  it('SHOULD call one time the observer WHEN requestEditTask is called', () => {
    const taskListId: TaskList['id'] = 123;
    const task: Task = { id: 234, title: 'Test Task', completed: false };
    const observer = jasmine.createSpy();

    service.getObservable().subscribe(observer);
    service.requestEditTask(taskListId, task);

    expect(observer).toHaveBeenCalledTimes(1);
  });
});
