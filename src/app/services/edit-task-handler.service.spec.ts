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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an observable', () => {
    expect(service.getObservable()).toBeTruthy();
  });

  it('should emit task edit request', (done) => {
    const taskListId: TaskList['id'] = 123;
    const task: Task = { id: 234, title: 'Test Task', completed: false };

    service.getObservable().subscribe(([emittedTaskListId, emittedTask]) => {
      expect(emittedTaskListId).toBe(taskListId);
      expect(emittedTask).toEqual(task);
      done();
    });

    service.requestEditTask(taskListId, task);
  });
});
