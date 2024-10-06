import { Component, Input, OnInit, inject } from '@angular/core';
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

@Component({
  selector: 'app-add-task-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './add-task-dialog.component.html',
  styleUrl: './add-task-dialog.component.css',
})
export class AddTaskDialogComponent implements OnInit {
  @Input() taskListId!: TaskList['id'];
  private taskListHandlerService = inject(TaskListHandlerService);

  visible = false;
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl<Task['title']>('', Validators.required),
      description: new FormControl<Task['description'] | undefined>(undefined),
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

  showDialog() {
    this.visible = true;
  }

  cancel() {
    this.visible = false;
    this.formGroup.reset();
  }
}
