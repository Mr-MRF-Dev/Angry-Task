import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTaskDialogComponent } from './edit-task-dialog.component';
import { Task } from '../../models/task';

describe('EditTaskDialogComponent', () => {
  let component: EditTaskDialogComponent;
  let fixture: ComponentFixture<EditTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditTaskDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EditTaskDialogComponent);
    component = fixture.componentInstance;

    const mockTask: Task = {
      id: 1,
      title: 'Test Task',
      description: 'Test Description',
      completed: false,
    };
    component.task = mockTask;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
