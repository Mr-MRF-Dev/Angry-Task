import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskDialogComponent } from './add-task-dialog.component';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('AddTaskDialogComponent', () => {
  let component: AddTaskDialogComponent;
  let fixture: ComponentFixture<AddTaskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaskDialogComponent],
      providers: [provideHttpClient(), provideHttpClientTesting()],
    }).compileComponents();

    fixture = TestBed.createComponent(AddTaskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
