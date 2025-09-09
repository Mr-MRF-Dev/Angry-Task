import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskListDialogComponent } from './add-task-list-dialog.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AddTaskListDialogComponent', () => {
  let component: AddTaskListDialogComponent;
  let fixture: ComponentFixture<AddTaskListDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskListDialogComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskListDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
