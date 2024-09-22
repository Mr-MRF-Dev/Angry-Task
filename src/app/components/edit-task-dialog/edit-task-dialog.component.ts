import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Task } from '../../models/task';

@Component({
  selector: 'app-edit-task-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css',
})
export class EditTaskDialogComponent implements OnInit {
  @Input() task!: Task;

  @Input() visible = false;
  @Output() visibleChange = new EventEmitter<boolean>();

  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl<Task['title']>(
        this.task.title,
        Validators.required,
      ),
      description: new FormControl<Task['description'] | undefined>(
        this.task.description,
      ),
    });
  }

  submit() {
    if (this.formGroup.valid) {
      this.task.title = this.formGroup.get('title')?.value;
      this.task.description = this.formGroup.get('description')?.value;
      this.cancel();
    }
  }

  cancel() {
    this.visible = false;
    this.visibleChange.emit(false);
  }
}
