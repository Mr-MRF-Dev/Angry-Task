import { Component, OnInit, inject } from '@angular/core';
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
import { TaskListHandlerService } from '../../services/task-list-handler.service';
import { NewTaskHandlerService } from '../../services/new-task-handler.service';
import { TaskList } from '../../models/task_list';

@Component({
  selector: 'app-add-task-dialog',
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.css',
})
export class AddTaskDialogComponent implements OnInit {
  private taskListHandlerService = inject(TaskListHandlerService);
  private newTaskHandlerService = inject(NewTaskHandlerService);
  private taskListId!: TaskList['id'];

  visible = false;
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl<Task['title']>('', Validators.required),
      description: new FormControl<Task['description'] | undefined>(undefined),
    });

    this.newTaskHandlerService.getObservable().subscribe((taskListId) => {
      this.taskListId = taskListId;
      this.formGroup.reset();
      this.visible = true;
    });
  }

  submit() {
    if (this.formGroup.valid) {
      const newTask: Task = {
        title: this.formGroup.get('title')?.value,
        description: this.formGroup.get('description')?.value,
        completed: false,
        id: Date.now(),
      };

      this.taskListHandlerService.createTask(this.taskListId, newTask);
      this.cancel();
    }
  }

  cancel() {
    this.visible = false;
    this.formGroup.reset();
  }
}
