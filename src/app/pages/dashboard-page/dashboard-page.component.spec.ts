import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageComponent } from './dashboard-page.component';
import { TaskListHandlerService } from '../../services/task-list-handler.service';
import { of } from 'rxjs';
import { TaskList } from '../../models/task_list';
import { EditTaskDialogComponent } from '../../components/edit-task-dialog/edit-task-dialog.component';
import { AddTaskDialogComponent } from '../../components/add-task-dialog/add-task-dialog.component';
import { AddTaskListDialogComponent } from '../../components/add-task-list-dialog/add-task-list-dialog.component';

describe('DashboardPageComponent: Initialization Tests', () => {
  let component: DashboardPageComponent;
  let fixture: ComponentFixture<DashboardPageComponent>;

  const mockTaskLists: TaskList[] = [
    {
      id: 1,
      title: 'Task List 1',
      description: 'This is a description',
      tasks: [],
    },
    {
      id: 2,
      title: 'Task List 2',
      tasks: [],
    },
  ];

  const taskListHandlerService = jasmine.createSpyObj(
    'TaskListHandlerService',
    ['getTaskLists'],
  );

  beforeEach(async () => {
    taskListHandlerService.getTaskLists.and.returnValue(of(mockTaskLists));
    await TestBed.configureTestingModule({
      imports: [
        DashboardPageComponent,
        EditTaskDialogComponent,
        AddTaskDialogComponent,
        AddTaskListDialogComponent,
      ],
      providers: [
        TaskListHandlerService,
        { provide: TaskListHandlerService, useValue: taskListHandlerService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('SHOULD create WHEN component is initialized', () => {
    expect(component).toBeTruthy();
  });

  it('SHOULD get task lists WHEN component is initialized', () => {
    expect(taskListHandlerService.getTaskLists).toHaveBeenCalled();
    expect(component['taskLists']).toEqual(mockTaskLists);
  });

  it('SHOULD set task list elements WHEN component is initialized', () => {
    const taskListElements =
      fixture.nativeElement.querySelectorAll('app-task-list');
    expect(taskListElements.length).toEqual(mockTaskLists.length);
  });

  it('SHOULD have addTaskListDialog element WHEN component is initialized', () => {
    const addTaskListDialogElement = fixture.nativeElement.querySelector(
      'app-add-task-list-dialog',
    );
    expect(addTaskListDialogElement).toBeTruthy();
  });

  it('SHOULD have addTaskDialog element WHEN component is initialized', () => {
    const addTaskListDialogElement = fixture.nativeElement.querySelector(
      'app-add-task-dialog',
    );
    expect(addTaskListDialogElement).toBeTruthy();
  });

  it('SHOULD have editTaskDialog element WHEN component is initialized', () => {
    const addTaskListDialogElement = fixture.nativeElement.querySelector(
      'app-edit-task-dialog',
    );
    expect(addTaskListDialogElement).toBeTruthy();
  });
});
