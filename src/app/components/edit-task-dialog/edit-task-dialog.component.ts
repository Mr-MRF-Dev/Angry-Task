import { Component, inject, OnInit } from '@angular/core';
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
import { TaskList } from '../../models/task_list';
import { TaskListHandlerService } from '../../services/task-list-handler.service';
import { EditTaskHandlerService } from '../../services/edit-task-handler.service';

@Component({
  selector: 'app-edit-task-dialog',
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './edit-task-dialog.component.html',
  styleUrl: './edit-task-dialog.component.css',
})
export class EditTaskDialogComponent implements OnInit {
  private editTaskHandlerService = inject(EditTaskHandlerService);
  private taskListHandlerService = inject(TaskListHandlerService);

  task!: Task;
  taskListId!: TaskList['id'];

  visible = false;
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl<Task['title']>('', Validators.required),
      description: new FormControl<Task['description'] | undefined>(''),
    });

    this.editTaskHandlerService
      .getObservable()
      .subscribe(([taskListId, task]) => {
        this.formGroup.reset();
        this.taskListId = taskListId;
        this.task = task;
        this.formGroup.get('title')?.setValue(task.title);
        this.formGroup.get('description')?.setValue(task.description);
        this.visible = true;
      });
  }

  submit() {
    if (this.formGroup.valid) {
      this.task.title = this.formGroup.get('title')?.value;
      this.task.description = this.formGroup.get('description')?.value;
      this.taskListHandlerService.editTask(this.taskListId, this.task);
      this.cancel();
    }
  }

  cancel() {
    this.visible = false;
  }
}
