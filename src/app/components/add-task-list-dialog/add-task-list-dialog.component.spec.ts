import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskListDialogComponent } from './add-task-list-dialog.component';

describe('AddTaskListDialogComponent', () => {
  let component: AddTaskListDialogComponent;
  let fixture: ComponentFixture<AddTaskListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskListDialogComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
