import { Component, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TaskList } from '../../models/task_list';
import { TaskListHandlerService } from '../../services/task-list-handler.service';

@Component({
  selector: 'app-add-task-list-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './add-task-list-dialog.component.html',
  styleUrl: './add-task-list-dialog.component.css',
})
export class AddTaskListDialogComponent implements OnInit {
  protected visible = false;
  protected formGroup!: FormGroup;
  private TaskListHandler = inject(TaskListHandlerService);

  ngOnInit() {
    this.formGroup = new FormGroup({
      title: new FormControl<string | undefined>(undefined, [
        Validators.required,
      ]),
      description: new FormControl<string | undefined>(undefined),
    });
  }

  submit() {
    if (this.formGroup.valid) {
      const newTaskList: TaskList = {
        id: Date.now(),
        title: this.formGroup.value.title,
        description: this.formGroup.value.description,
        tasks: [],
      };

      if (this.TaskListHandler.createTaskList(newTaskList)) {
        this.cancel();
      }
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
