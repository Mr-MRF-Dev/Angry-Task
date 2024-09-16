import { Component, EventEmitter, Output } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { TaskList } from '../../models/list';

@Component({
  selector: 'app-add-task-list-dialog',
  standalone: true,
  imports: [DialogModule, ButtonModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './add-task-list-dialog.component.html',
  styleUrl: './add-task-list-dialog.component.css',
})
export class AddTaskListDialogComponent {
  @Output() newList = new EventEmitter<TaskList>();
  visible: boolean = false;
  formGroup!: FormGroup;

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