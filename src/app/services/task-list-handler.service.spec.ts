import { TestBed } from '@angular/core/testing';
import {
  LOCAL_STORAGE_KEY,
  TaskListHandlerService,
} from './task-list-handler.service';
import { TaskList } from '../models/task_list';
import { Task } from '../models/task';
import { LocalStorageService } from './local-storage.service';

describe('TaskListHandlerService', () => {
  let service: TaskListHandlerService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService],
    });
    service = TestBed.inject(TaskListHandlerService);
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('SHOULD be created WHEN the service is instantiated', () => {
    expect(service).toBeTruthy();
  });

  it('SHOULD load the task lists from the local storage WHEN the service is instantiated', () => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };

    const mockTaskListArr = [mockTaskList];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(mockTaskListArr));

    const newService = new TaskListHandlerService(new LocalStorageService());

    newService.getTaskLists().subscribe((taskLists) => {
      expect(taskLists[0]).toEqual(mockTaskList);
    });
  });

  it('SHOULD return an empty array WHEN getTaskLists is called and there are no task lists', (done) => {
    service.getTaskLists().subscribe((taskLists) => {
      expect(taskLists).toEqual([]);
      done();
    });
  });

  it('SHOULD return an observable WHEN getTaskLists is called', () => {
    expect(service.getTaskLists()).toBeTruthy();
  });

  it('SHOULD emit task list creation request WHEN createTaskList is called', (done) => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };

    service.createTaskList(mockTaskList);

    service.getTaskLists().subscribe((taskLists) => {
      expect(taskLists[0] as TaskList).toEqual(mockTaskList);
      done();
    });
  });

  it('SHOULD emit task list deletion request WHEN deleteTaskList is called', (done) => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };

    service.createTaskList(mockTaskList);
    service.deleteTaskList(mockTaskList);

    service.getTaskLists().subscribe((taskLists) => {
      expect(taskLists).toEqual([]);
      done();
    });
  });

  it('SHOULD emit task creation request WHEN createTask is called', (done) => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };
    const mockTask: Task = { id: 234, title: 'Test Task', completed: false };

    service.createTaskList(mockTaskList);
    service.createTask(mockTaskList.id, mockTask);

    service.getTaskLists().subscribe((taskLists) => {
      expect(taskLists[0].tasks[0]).toEqual(mockTask);
      done();
    });
  });

  it('SHOULD emit task deletion request WHEN deleteTask is called', (done) => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };
    const mockTask: Task = { id: 234, title: 'Test Task', completed: false };

    service.createTaskList(mockTaskList);
    service.createTask(mockTaskList.id, mockTask);
    service.deleteTask(mockTaskList.id, mockTask.id);

    service.getTaskLists().subscribe((taskLists) => {
      expect(taskLists[0].tasks).toEqual([]);
      done();
    });
  });

  it('SHOULD emit task edit request WHEN editTask is called', (done) => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };
    const mockTask: Task = { id: 234, title: 'Test Task', completed: false };

    service.createTaskList(mockTaskList);
    service.createTask(mockTaskList.id, mockTask);
    const editedTask = { ...mockTask, description: 'description Task' };
    service.editTask(mockTaskList.id, editedTask);

    service.getTaskLists().subscribe((taskLists) => {
      expect(taskLists[0].tasks[0]).toEqual(editedTask);
      done();
    });
  });

  it('SHOULD save the task lists in the local storage WHEN a task list is created', () => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };

    service.createTaskList(mockTaskList);

    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBe(
      JSON.stringify([mockTaskList]),
    );
  });

  it('SHOULD save the task lists in the local storage WHEN a task list is deleted', () => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };

    service.createTaskList(mockTaskList);
    service.deleteTaskList(mockTaskList);

    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBe(JSON.stringify([]));
  });

  it('SHOULD save the task lists in the local storage WHEN a task is created', () => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };
    const mockTask: Task = { id: 234, title: 'Test Task', completed: false };

    service.createTaskList(mockTaskList);
    service.createTask(mockTaskList.id, mockTask);

    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBe(
      JSON.stringify([mockTaskList]),
    );
  });

  it('SHOULD save the task lists in the local storage WHEN a task is deleted', () => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };
    const mockTask: Task = { id: 234, title: 'Test Task', completed: false };

    service.createTaskList(mockTaskList);
    service.createTask(mockTaskList.id, mockTask);
    service.deleteTask(mockTaskList.id, mockTask.id);

    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBe(
      JSON.stringify([mockTaskList]),
    );
  });

  it('SHOULD save the task lists in the local storage WHEN a task is edited', () => {
    const mockTaskList: TaskList = {
      id: 123,
      title: 'Test Task List',
      tasks: [],
    };
    const mockTask: Task = { id: 234, title: 'Test Task', completed: false };

    service.createTaskList(mockTaskList);
    service.createTask(mockTaskList.id, mockTask);
    const editedTask = { ...mockTask, description: 'description Task' };
    service.editTask(mockTaskList.id, editedTask);

    expect(localStorage.getItem(LOCAL_STORAGE_KEY)).toBe(
      JSON.stringify([mockTaskList]),
    );
  });
});
