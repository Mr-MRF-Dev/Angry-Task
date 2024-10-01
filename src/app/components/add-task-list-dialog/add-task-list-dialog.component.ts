import { Component, EventEmitter, Output, OnInit } from '@angular/core';
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

@Component({
  selector: 'app-add-task-list-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './add-task-list-dialog.component.html',
  styleUrl: './add-task-list-dialog.component.css',
})
export class AddTaskListDialogComponent implements OnInit {
  @Output() newList = new EventEmitter<TaskList>();
  visible = false;
  formGroup!: FormGroup;

  ngOnInit() {
    this.formGroup = new FormGroup({
      id: new FormControl<number>(Date.now()),
      title: new FormControl<string | undefined>(undefined, [
        Validators.required,
      ]),
      description: new FormControl<string | undefined>(undefined),
      tasks: new FormControl<TaskList['tasks']>([]),
    });
  }

  submit() {
    if (this.formGroup.valid) {
      this.newList.emit(this.formGroup.value);
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
